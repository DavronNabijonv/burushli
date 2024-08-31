import Navbar from "./page/nav/navbar";
import { Element, animateScroll as scroll, scrollSpy } from "react-scroll";
import "./app.css";
import ParticlesComponent from "./ParticlesBackground";
import About from "./page/about";
import Komiks from "./page/komiks";
import Jamoa from "./page/jamoa";
import Ish_jarayoni from "./page/ish_jarayoni";
import Aloqa_va_elon from "./page/aloqa_va_elon";
import Load from "./page/loading_page/load";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [tog_app, setTog_app] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTog_app(true);
    }, 3000);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <ParticlesComponent className="particles" />
      <div className={tog_app ? "close" : "open"}>
        <Load />
      </div>
      <div className={tog_app ? "open" : "close"}>
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
    </div>
  );
}

export default App;
