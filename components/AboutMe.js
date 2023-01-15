import { Container, Image } from "react-bootstrap";
import { mono } from "./Landing";
import Color from "./Color";

export default function AboutMe() {
  return (
    <div>
      <a name="about-me" />
      <Container className="h-screen flex flex-col sm:flex-row items-center justify-center sm:justify-between">
        <div className="sm:w-1/2">
          <Image src="/img3.jpg" alt="img3" className="w-52 sm:w-[400px] xxs:mb-10 sm:mb-0" thumbnail />
        </div>
        <div className="sm:w-1/2">
          <span className={mono.className}>
            <p className="text-justify md:text-[20px] xxs:px-4 sm:px-2">
            Hi 👋 I&apos;m Jia Yuan, a Computer Science undergrad 
            at National University of Singapore (NUS). I specialise 
            in <Color color="orange">Software Engineering</Color> and <Color color="yellow">Artificial Intelligence</Color>. 
            I am currently working at Stablecorp as a Fintech Developer.
            I am passionate in Fintech and AI. I love travelling and
            being in nature!
            </p>
            <span className="text-justify md:text-[20px] xxs:px-4 sm:px-2">
            Languages:
            </span>
            <p className="text-justify text-sm md:text-md xxs:px-4 sm:px-2">
            Python · Java · C · Javascript · Typescript · SQL · HTML · CSS · Solidity
            </p>
            <span className="text-justify md:text-[20px] xxs:px-4 sm:px-2">
            Frameworks/Libraries/Tools:
            </span>
            <p className="text-justify text-sm md:text-md xxs:px-4 sm:px-2">
            ReactJS · NextJS · React Native · NodeJS · Microsoft SQL Server · Azure Fuctions · Cloud Firestore · Firebase · Github · Gitlab
            </p>
          </span>
        </div>
      </Container>
    </div>
  )
}