import { Image } from "react-bootstrap";

export default function StockCard({ stock }) {
  const priceDiff = (stock.last - stock.prevClose).toFixed(2);
  const priceDiffPerc = (priceDiff / stock.last * 100).toFixed(2);
  const sign = () => priceDiff >= 0 && "+";
  const meta = {
    AAPL: "Apple Inc.",
    MSFT: "Microsoft",
    TSLA: "Tesla Inc.",
    SPY: "S&P500 ETF",
    QQQ: "NASDAQ ETF"
  }

  return (
    <a href={`https://ca.finance.yahoo.com/quote/${stock.ticker}`} className="no-underline text-black" target="_blank" rel="noreferrer noopener">
    <div className="border border-solid border-gray rounded min-w-[176px] min-h-[176px] p-3 mr-4 hover:bg-neutral-800 hover:text-white">
      <div className="flex justify-between">
        <div>
          <h6>{stock.ticker}</h6>
          <p className="text-xs -mt-2">{meta[stock.ticker].substring(0,11)}</p>
        </div>
        <div className={`flex flex-col ${priceDiff >= 0 ? "text-[#32FF00]" : "text-[#FF0000]"} font-[500]`}>
          <span className="-mt-1">{sign()}{priceDiff}</span>
          <span className="-mt-1">{sign()}{priceDiffPerc}%</span>
        </div>
      </div>
      <div className="h-14"></div>
      <div className="text-[22px] text-end font-[500]">{stock.last.toFixed(2)}</div>
    </div>
    </a>
  )
}