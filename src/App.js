import Navbar from "./page/nav/navbar";
import { Element, animateScroll as scroll, scrollSpy } from "react-scroll";
import "./app.css";
import ParticlesComponent from "./ParticlesBackground";
import About from "./page/about";
import Komiks from "./page/komiks";
import Jamoa from "./page/jamoa";
import Ish_jarayoni from "./page/ish_jarayoni";
import Aloqa_va_elon from "./page/aloqa_va_elon";

function App() {
  return (
    <div className="App">
      <ParticlesComponent className="particles" />
      <Navbar />
      <Element name="about" className="about">
        <About />
      </Element>
      <Element name="komiks" className="komiks">
        <Komiks />
      </Element>
      <Element name="jamoa" className="jamoa">
        <Jamoa />
      </Element>
      <Element name="ish" className="ish">
        <Ish_jarayoni />
      </Element>
      <Element name="aloqa" className="aloqa">
        <Aloqa_va_elon />
      </Element>
    </div>
  );
}

export default App;
