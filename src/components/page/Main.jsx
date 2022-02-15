import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Portfolio } from "../Portfolio/Portfolio";
import { partical } from "../../config/index";

export default function Main({ mode }) {
  return (
    <Container>
      <Particles id="tsparticles" options={{ ...partical }} />
      <Hero mode={mode} />
      <About mode={mode} />
      <Portfolio mode={mode} />
      <Contact mode={mode} />
    </Container>
  );
}
