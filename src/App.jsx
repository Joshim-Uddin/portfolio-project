import "./App.css";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <AboutMe />
      <Expertise />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
