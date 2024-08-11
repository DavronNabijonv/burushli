import Navbar from "./page/nav/navbar";
import "./app.css";
import ParticlesComponent from "./ParticlesBackground";
import About from "./page/about";
import Komiks from "./page/komiks";
import Jamoa from "./page/jamoa";
import Ish_jarayoni from "./page/ish_jarayoni";

function App() {
  return (
    <div className="App">
      <ParticlesComponent className="particles" />
      <Navbar />
      {/* <About />
      <Komiks />
      <Jamoa/> */}
      <Ish_jarayoni/>
    </div>
  );
}

export default App;
