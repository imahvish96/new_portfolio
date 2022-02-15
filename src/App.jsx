import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header.jsx";
import { GlobalStyle } from "./styles/global";
import Main from "./components/page/Main";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [mode, setMode] = React.useState(false);
  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
    setMode(!mode);
  }
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} mode={mode} />
      <Main mode={mode} />
      <Footer mode={mode} />
    </React.Fragment>
  );
}

export default App;
