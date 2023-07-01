import PowerModeInput from "power-mode-input";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { useEffect } from "react";

function App() {
  return (
    <div className="container cube">
      <Banner />
      <AboutMe />
      <Expertise />
      <Projects />
    </div>
  );
}

export default App;
