import { Button, Container, Image } from "react-bootstrap";
import { mono } from "./Landing";

export default function Contact() {
  return (
    <>
      <a name="contact" />
      <Container className="h-[70%] sm:h-[90%] flex flex-col items-center justify-center text-dark">
        <h1 className={mono.className}>
          Get in <a href="/myday" className="no-underline text-black">touch</a> with me
        </h1>
        <div className="h-8" />
        <Button 
          variant="dark" 
          href="https://www.linkedin.com/in/ngjiayuan/" 
          target="_blank" 
          rel="noreferrer noopener" 
          className={mono.className}
        >
          <span className="text-[22px] px-2 flex items-center">
            Say Hi!
            <Image src="/newtab.png" className="w-6 h-6 ml-2" alt="newtab" />
          </span>
        </Button>
      </Container>
    </>
  )
}