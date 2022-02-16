import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header.jsx";
import { GlobalStyle } from "./styles/global";
import Main from "./components/page/Main";
import "react-toastify/dist/ReactToastify.css";
function App() {
  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
