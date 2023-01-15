import { Image } from "react-bootstrap";

export default function NewsCard() {
  return (
    <div className="border border-solid border-gray rounded min-w-[176px] min-h-[208px] max-w-[364px] p-3 mr-4">
      <div className="flex justify-between">
        <h6 className="w-3/4">Bloomberg</h6>
        <span className="-mt-[2px] text-xs w-[55px]">Jan 14</span>
      </div>
      <div className="text-sm">Fear And Greed: Why The Huge Bitcoin And Crypto Price Pump Could Be Just Getting Started.</div>
    </div>
  )
}