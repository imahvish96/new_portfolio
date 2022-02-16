import { Container, Logo } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import logo from "../../assets/mf logo.png";
import { footerIcon } from "../../languagepack";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <Logo>
          <img src={logo} alt="" />
        </Logo>
      </a>
      <div>
        <p>
          This website was made with <img src={reactIcon} alt="React" /> is very
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        {footerIcon.map((icon) => (
          <a
            href="https://www.linkedin.com/in/jtsoares/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={icon} alt="Linkedin" />
          </a>
        ))}
      </div>
    </Container>
  );
}
