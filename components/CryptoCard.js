import { Image } from "react-bootstrap";

export default function CryptoCard({ crypto }) {
  const first = crypto.priceData[0]
  const last = crypto.priceData[crypto.priceData.length - 1];
  const priceDiff = (last.close - first.close).toFixed(2);
  const priceDiffPerc = (priceDiff / first.close * 100).toFixed(2);
  const sign = () => priceDiff >= 0 && "+";
  const meta = {
    btc: "Bitcoin",
    eth: "Ethereum",
    sol: "Solana",
  }

  return (
    <a href={`https://www.coingecko.com/en/coins/${meta[crypto.baseCurrency].toLowerCase()}`} className="no-underline text-black" target="_blank" rel="noreferrer noopener">
    <div className="border border-solid border-gray rounded min-w-[176px] min-h-[176px] p-3 mr-4 hover:bg-neutral-800 hover:text-white">
      <div className="flex justify-between">
        <div>
          <h6>{crypto.baseCurrency.toUpperCase()}</h6>
          <p className="text-xs -mt-2">{meta[crypto.baseCurrency].substring(0,11)}</p>
        </div>
        <div className={`flex flex-col ${priceDiff >= 0 ? "text-[#32FF00]" : "text-[#FF0000]"} font-[500]`}>
          <span className="-mt-1">{sign()}{priceDiff}</span>
          <span className="-mt-1">{sign()}{priceDiffPerc}%</span>
        </div>
      </div>
      <div className="h-14"></div>
      <div className="text-[22px] text-end font-[500]">{last.close.toFixed(2)}</div>
    </div>
    </a>
  )
}