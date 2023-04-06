
const callPixelTwitter = async (tweets) => {
	try {
		const res = await fetch(`https://pixels-data.xyz/wen`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			  },
			  body: JSON.stringify(tweets),
		});

		const data = await res.json();

		return res.status(200).json({
            status: 'Ok',
            data
        });
	} catch (err) {
		return res.status(500).send({ error });
	}
};
