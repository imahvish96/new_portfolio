import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    --darkblue: #304cfd;
    --orange: #f07138;
    --darkgrey: #44566c;
    --darkorange: #272333;
    --lightgrey: #f5f8f9
    scroll-padding-top: 10rem;

    /************************** light mode ************************/

    &.light{

      body {
        transition: 0.5s;
        background-color: var(--lightgrey);
        color: var(--black);
      }

      .projects {
        color: var(--black);
        & > div {
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          background-color: rgba(245, 220, 203, 0.30);
          border-radius: 12px;
          ${"" /* border: 2px solid var(--orange); */}
          transition: 0.3s;
          color: #000;
          & > div {
            color: var(--black);
          }
        &:hover {
          transform: translateY(-5px);
          transition: 0.3s;
        }
      }
    }

  
    .logo {
      color: var(--black);
    }

    header.header-fixed {
      transition: 0.5s;
      background-color: #f5f5f550;
      a{
        transition: 0.5s;
        color: var(--black);
      }
      .menu,.menu:before, .menu:after{
        background-color: var(--darkblue); 
      }
      .menu.active{
        background-color: rgba(555,555,555,0);
      }
    }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }

/******************** light mode end *****************************/


  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--darkorange);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--orange);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    &::first-letter{
      color: var(--orange);
    }
  }
`;
