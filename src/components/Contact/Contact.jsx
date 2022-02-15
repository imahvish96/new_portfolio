import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";
import { contact } from "../../languagepack";

export function Contact() {
  const { title, description, email, phone } = contact;
  const [contacts, me] = title.split(" ");
  return (
    <Container id="contato">
      <header>
        <h2>
          <span style={{ color: "var(--orange)" }}>{contacts}</span>
          &nbsp;
          {me}
        </h2>
        <p>{description}</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:joaotuliosoares@hotmail.com">{email}</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+5531981213843">{phone}</a>
        </div>
      </div>
      <Form />
    </Container>
  );
}
