import { useEffect, useState } from "react";
import axios from "axios";
import StockCard from "./StockCard";
import CryptoCard from "./CryptoCard";

export default function Market() {
  const [stocks, setStocks] = useState([]);
  const [crypto, setCrypto] = useState([]);
  const order = {
    BTC: 1,
    ETH: 2,
    SOL: 3,
    SPY: 1,
    QQQ: 2,
    AAPL: 3,
    MSFT: 4,
    TSLA: 5,
  }
  const compareFn = (a, b) => {
    if (order[a.ticker] < order[b.ticker]) {
      return -1;
    }
    if (order[a.ticker] > order[b.ticker]) {
      return 1;
    }
    return 0;
  }
  const config = {
    method: "POST",
    url: "/api/getStock",
    data: {
      tickers: "spy,qqq,aapl,msft,tsla"
    },
    headers: { 
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': "*"
    }
  }
  const config2 = {
    method: "POST",
    url: "/api/getCrypto",
    data: {
      tickers: "btcusd,ethusd,solusd"
    },
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': "*"
    }
  }

  useEffect(() => {
    axios.request(config)
      .then(r => {
        r.data.sort(compareFn);
        setStocks(r.data);
      })
      .catch(e => console.log(e));
    axios.request(config2)
      .then(r => {
        r.data.sort(compareFn);
        setCrypto(r.data);
      })
      .catch(e => console.log(e));
  }, [])

  return (
    <div>
      <h3>Stocks</h3>
      <div className="overflow-scroll sm:scrollbar-hide mb-4">
        <div className="flex">
          {stocks.map((item, idx) => (
            <StockCard key={idx} stock={item} />
          ))}
        </div>
      </div>
      <h3>Crypto</h3>
      <div className="overflow-scroll sm:scrollbar-hide">
        <div className="flex">
          {crypto.map((item, idx) => (
            <CryptoCard key={idx} crypto={item} />
          ))}
        </div>
      </div>
    </div>
  )
}