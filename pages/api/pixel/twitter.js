
const callPixelTwitter = async (req, res) => {
	try {
		const res = await fetch(`https://pixels-data.xyz/twitter`);
		const data = await res.json();

		return res.status(200).json({
            status: 'Ok',
            data
        });
	} catch (err) {
		return res.status(500).send({ error });
	}
};
