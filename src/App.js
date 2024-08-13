import Navbar from "./page/nav/navbar";
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
      {/* <About />
      <Komiks />
      <Jamoa/> */}
      {/* <Ish_jarayoni/> */}
      <Aloqa_va_elon/>
    </div>
  );
}

export default App;
