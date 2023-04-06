import {useState, useEffect} from "react";
import {signOut} from "next-auth/react";
import axios from 'axios';

export default function Followers({session}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isReady, setReady] = useState(false);

    const fetchTweets = async () => {
        const res = await axios.get('/api/twitter/tweets');

        setData(res.data)
        if(res.error) {
            setError(res.error)
        }
    }

    const notisePixel = async () => {
        const res = await axios.get('/api/pixel/twitter');
        if(!res.error) {
            setReady(true)
        }
    }

    const providesPixelData = async () => {
        await axios.post("/api/pixel/wen", data)
   }

    useEffect(async () => {
        fetchTweets()
    }, [])
    
    useEffect(async () => {
        if(data) {
           notisePixel()
           providesPixelData()
        }
    },[data])
    

    if (error &&error.errors[0] && error.errors[0].code === 89) {
        signOut();
    }

    if (!data) return <div> Loading... </div>;
    
    return (
        <figure className="md:flex bg-white rounded-xl p-8 md:p-0 shadow-xl twitter-card dark:bg-gray-800">
            <div className="pt-6 md:p-4 text-center md:text-left space-y-4 md:w-3/4">
                <blockquote>
                    <p className="text-lg font-medium 2xl:text-3xl dark:text-gray-400" style={{whiteSpace: "nowrap"}}>
                        {
                            isReady ? 'You successfully logged in' : 'Try again later'
                        }
                    </p>
                </blockquote>
            </div>
        </figure>
    )
}
