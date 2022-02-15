import styled from "styled-components";

export const Container = styled.section`
  margin: 12rem auto 0px;
  width: 62%;
  text-align: justify;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  h2 {
    margin-bottom: 5rem;
    text-align: center;
    font-size: 5rem;
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .hero-image {
    img {
      max-width: 500px;
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .about-image {
      display: flex;
    }
    .hard-skills {
      justify-content: center;
    }
  }
`;

export const SkillHeading = styled.h3`
  margin-top: 2rem;
  color: ${({ mode }) => (mode ? "var(--darkblue)" : "var(--orange)")};
`;
