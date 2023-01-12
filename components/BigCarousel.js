import { Button, Carousel, Image } from "react-bootstrap";
import { Roboto_Mono } from "@next/font/google";

const mono = Roboto_Mono({ subsets: ['latin'] })

export default function BigCarousel() {
  return (
    <Carousel className="mt-8 max-w-4xl h-[500px]" variant="dark">
      <Carousel.Item className="flex items-center justify-center">
        <Image
          className="d-block rounded"
          src="/grapes.png"
          alt="grapes website"
        />
        <Carousel.Caption className="text-black bg-[rgba(255,255,255,0.8)] rounded">
          <h5 className={mono.className}>Grapes Website</h5>
          <div className="flex items-center justify-center mb-2">
            <div className="bg-blue rounded px-2 font-bold text-white mr-2">Typescript</div>
            <div className="bg-blue rounded px-2 font-bold text-white mr-2">MUI</div>
            <div className="bg-purple rounded px-2 font-bold text-white mr-2">Gatsby</div>
          </div>
          <Button 
            variant="dark" 
            className={mono.className} 
            href="https://www.grapesfinance.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="flex items-center mr-1">
              Visit
              <Image src="/newtab.png" className="w-5 ml-1" alt="newtab" />
            </span>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="flex items-center justify-center">
        <Image
          className="d-block rounded"
          src="/stablecorp.png"
          alt="stablecorp website"
        />
        <Carousel.Caption className="text-black bg-[rgba(255,255,255,0.8)] rounded">
          <h5 className={mono.className}>Stablecorp Website</h5>
          <div className="flex items-center justify-center mb-2">
            <div className="bg-blue rounded px-2 font-bold text-white mr-2">Webflow</div>
          </div>
          <Button 
            variant="dark" 
            className={mono.className} 
            href="https://www.stablecorp.ca/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="flex items-center mr-1">
              Visit
              <Image src="/newtab.png" className="w-5 ml-1" alt="newtab" />
            </span>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="flex items-center justify-center">
        <Image
          className="d-block rounded"
          src="/Finus.png"
          alt="finus"
        />
        <Carousel.Caption className="text-black bg-[rgba(255,255,255,0.8)] rounded">
          <h5 className={mono.className}>Personal Finance Mobile Application</h5>
          <div className="flex items-center justify-center mb-2">
            <div className="bg-yellow rounded px-2 font-bold mr-2">Javascript</div>
            <div className="bg-blue rounded px-2 font-bold text-white mr-2">React Native</div>
            <div className="bg-pink rounded px-2 font-bold text-white mr-2">styled-components</div>
            <div className="bg-orange rounded px-2 font-bold mr-2">Firebase</div>
            <div className="bg-black rounded px-2 font-bold text-white">Expo</div>
          </div>
          <Button 
            variant="dark" 
            className={mono.className}
            href="https://www.github.com/ngjiayuan/FiNUS"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="flex items-center mr-1">
              <Image src="/github-white.svg" className="mr-1" alt="github" />
              Repo
            </span>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block rounded"
          src="/ModuLink.png"
          alt="modulink"
        />
        <Carousel.Caption className="text-black bg-[rgba(255,255,255,0.8)] rounded">
          <h5 className={mono.className}>Groupmates Finder Desktop Application</h5>
          <div className="flex items-center justify-center mb-2">
            <div className="bg-blue rounded px-2 font-bold text-white mr-2">Java</div>
            <div className="bg-orange rounded px-2 font-bold">JavaFX</div>
          </div>
          <Button
            variant="dark" 
            className={mono.className}
            href="https://www.github.com/ngjiayuan/tp"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="flex items-center mr-1">
              <Image src="/github-white.svg" className="mr-1" alt="github" />
              Repo
            </span>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}