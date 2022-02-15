import styled from "styled-components";

export const Container = styled.section`
  padding: 17% 0 7%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 20rem;
  background: rgba(0, 0, 0, 0);
  justify-content: center;
  align-items: center;
  .hero-text {
    & > p {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 7rem;
    }

    h3 {
      color: var(--orange);
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .button {
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .about-image {
    text-align: center;
    & > div {
      width: 40rem;
      margin: 0 auto;
    }
    img {
      width: 100%;
      filter: grayscale(1);
      transition: filter 0.5s;
      border-radius: 100%;
      &:hover {
        filter: grayscale(0);
      }
    }
  }

  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;
    .hero-text {
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image {
      display: none;
    }
  }

  @media (max-width: 600px) {
    margin-top: 25%;
  }
  @media (max-width: 480px) {
    margin-top: 35%;
  }
`;
