import axios from "axios";

export default async function handler(req, res) {
  const { tickers } = req.body;
  const options = {
    method: "GET",
    url: `https://api.tiingo.com/tiingo/crypto/prices?tickers=${tickers}&resampleFreq=1min`,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': "*",
      'Authorization': `Token ${process.env.TIINGO_API}`
    }
  };
  await axios.request(options)
          .then(r => res.status(200).json(r.data))
          .catch(e => res.status(401).json({ error: "error retrieving stock API" }));
}