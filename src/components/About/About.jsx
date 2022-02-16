import { Container, SkillHeading } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { aboutMe, skillsIcon } from "../../languagepack";
import { styles } from "../../config";

export function About() {
  const { title, paragraph, skillsHeading } = aboutMe;
  const [about, me] = title.split(" ");
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>
            <span style={{ color: "var(--orange)" }}>{about}</span>
            &nbsp;
            {me}
          </h2>
        </ScrollAnimation>

        {paragraph.map((item, i) => (
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={0.2 * 1000}
            style={i === 1 && { ...styles }}
          >
            <p>{item.paragraph}</p>
          </ScrollAnimation>
        ))}

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <SkillHeading>{aboutMe.skillsHeading}</SkillHeading>
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
      {/* <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div> */}
    </Container>
  );
}
