import { Container } from "./styles";
import profile from "../../assets/myDp.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import { aboutMe, skillsIcon } from "../../languagepack";
import { styles } from "../../config";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>{aboutMe.title}</h2>
        </ScrollAnimation>

        {aboutMe.paragraph.map((item, i) => (
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={0.2 * 1000}
            style={i === 1 && { ...styles }}
          >
            <p>{item.paragraph}</p>
          </ScrollAnimation>
        ))}

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>{aboutMe.skillsHeading}</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          {skillsIcon.map((skill) => (
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                <img src={skill.icon} alt={skill.name} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={profile} alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
