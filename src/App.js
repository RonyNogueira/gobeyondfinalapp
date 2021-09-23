import React from "react";
import { Routes } from "./routes/routes";
import {Footer, Header} from "./components";

function App() {
  return (
    <>
      <Header/>
        <Routes/>
      <Footer/>
    </>
  );
}

export default App;
