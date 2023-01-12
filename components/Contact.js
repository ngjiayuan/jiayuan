import { Button, Container, Image } from "react-bootstrap";
import { Roboto_Mono } from "@next/font/google";

const mono = Roboto_Mono({ subsets: ['latin'] })

export default function Contact() {
  return (
    <>
      <a name="contact" />
      <Container className="h-[70%] sm:h-[90%] flex flex-col items-center justify-center text-dark">
        <h1 className={mono.className}>Get in touch with me</h1>
        <div className="h-8" />
        <Button 
          variant="dark" 
          href="https://www.linkedin.com/in/ngjiayuan/" 
          target="_blank" 
          rel="noreferrer noopener" 
          className={mono.className}
        >
          <span className="text-[24px] px-2 flex items-center">
            Say Hi!
            <Image src="/newtab.png" className="w-6 h-6 ml-2" alt="newtab" />
          </span>
        </Button>
      </Container>
    </>
  )
}