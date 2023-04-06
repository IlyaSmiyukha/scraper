export default function Layout(props) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 dark:bg-gray-900">
            <main
                className="flex flex-col items-center justify-center w-full flex-1 xl:px-60 lg:px-10 md:px-10 text-center">
                {props.children}
            </main>
        </div>
    )
}
