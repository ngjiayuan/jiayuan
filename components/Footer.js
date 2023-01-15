import { Button, Container, Image } from "react-bootstrap";
import { mono } from "./Landing";

export default function Footer() {
  return (
    <>
      <div className="h-[30%] sm:h-[10%] flex flex-col items-center justify-center text-dark border-t border-dark border-solid">
        <Container className="w-full px-4 flex flex-col sm:flex-row justify-between">
          <span className={mono.className}>
            <span className="flex flex-col sm:flex-row">
              <a className="py-2 sm:mr-10 text-dark no-underline" href="#">Top</a>
              <a className="py-2 sm:mr-10 text-dark no-underline" href="#about-me">About Me</a>
              <a className="py-2 sm:mr-10 text-dark no-underline" href="#my-works">My Works</a>
            </span>
          </span>
          <div className="flex xxs:mt-2 sm:mt-1">
            <a href="https://t.me/yuanzi" target="_blank" rel="noreferrer noopener">
              <Image src="/telegram.svg" className="w-8 mr-3" alt="telegram" />
            </a>
            <a href="https://www.linkedin.com/in/ngjiayuan/" target="_blank" rel="noreferrer noopener">
              <Image src="/linkedin.svg" className="w-8 mr-3" alt="linkedin" />
            </a>
            <a href="https://www.github.com/ngjiayuan" target="_blank" rel="noreferrer noopener">
              <Image src="/github.svg" className="w-8 mr-3" alt="github" />
            </a>
            <a href="https://www.github.com/ngjiayuan" target="_blank" rel="noreferrer noopener">
              <Image src="/cv.png" className="w-8" alt="resume" />
            </a>
          </div>
        </Container>
      </div>
    </>
  )
}