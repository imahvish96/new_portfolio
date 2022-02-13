import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header.jsx";
import { GlobalStyle } from "./styles/global";
import Main from "./components/page/Main";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
