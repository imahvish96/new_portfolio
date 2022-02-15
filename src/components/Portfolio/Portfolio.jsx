import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { portfolio } from "../../languagepack";

export function Portfolio() {
  const { title, portfolio: projects } = portfolio;

  const [my, project] = title.split(" ");
  return (
    <Container id="portfolio">
      <ScrollAnimation animateIn="fadeInLeft">
        <h2>
          <span style={{ color: "var(--orange)" }}>{my}</span>
          &nbsp;
          {project}
        </h2>
      </ScrollAnimation>

      <div className="projects">
        {projects.map((port) => (
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--orange)"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  {port.links.map((link) => (
                    <a href={link.url} target="_blank" rel="noreferrer">
                      <img src={link.image} alt="GitHub" />
                    </a>
                  ))}
                </div>
              </header>
              <div className="body">
                <h3>{port.projectTitle}</h3>
                <p>{port.projectDescription}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {port.technology.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
