import { Carousel, Container } from "react-bootstrap";
import BigCarousel from "./BigCarousel";
import SmallCarousel from "./SmallCarousel";
import { mono } from "./Landing";

export default function MyWorks() {
  return (
    <>
      <a name="my-works" />
      <Container className="h-screen flex flex-col items-center justify-center w-full">
        <h1 className={mono.className}>My Works</h1>
        <div className="hidden sm:inline">
          <BigCarousel />
        </div>
        <div className="sm:hidden">
          <SmallCarousel />
        </div>
      </Container>
    </>
  )
}