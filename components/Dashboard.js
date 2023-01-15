import { Button, Container } from "react-bootstrap";
import { mono } from "./Landing";
import DayNavbar from "./DayNavbar";
import Market from "./Market";
import News from "./News";

export default function Dashboard() {
  return (
    <div className={mono.className}>
      <DayNavbar />
      <Container className="py-4">
        <Market />
        <News />
      </Container>
    </div>
  )
}