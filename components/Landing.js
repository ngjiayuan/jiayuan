import { Container, Image } from "react-bootstrap";
import { Roboto_Mono } from "@next/font/google";

const mono = Roboto_Mono({ subsets: ['latin'] })

export default function Landing() {
  return (
    <>
      <Container className="flex flex-col sm:flex-row items-center sm:justify-between sm:h-[94.2%] h-full">
        <div className="flex sm:w-0 mb-24 mt-24">
          <Image src="/img1.jpg" alt="img1" className="sm:hidden xxs:inline w-36 px-2 pt-2 pb-4 border-gray border-[1.5px] -rotate-[20deg] translate-x-12 translate-y-12" />
          <Image src="/img2.jpg" alt="img2" className="sm:hidden xxs:inline w-40 px-2 pt-2 pb-4 border-gray border-[1.5px]" />
        </div>
        <div className="flex flex-col">
          <span class="writer">
            <span class="writer-text">Hello, I&apos;m Jia Yuan!</span>
          </span>
          <span className={mono.className}>
            <span className="text-orange sm:text-lg font-bold text-end">Software Developer</span>
          </span>
        </div>
        <div className="flex xxs:w-0 sm:w-1/2">
          <Image src="/img1.jpg" alt="img1" className="xxs:hidden sm:inline w-72 px-3 pt-3 pb-16 border-gray border-[1.5px] -rotate-[20deg] translate-x-12 translate-y-12" />
          <Image src="/img2.jpg" alt="img2" className="xxs:hidden sm:inline w-80 px-3 pt-3 pb-16 border-gray border-[1.5px]" />
        </div>
      </Container>
    </>
  )
}