import Navbar from "./page/nav/navbar";
import "./app.css";
import ParticlesComponent from "./ParticlesBackground";
import About from "./page/about";
import Komiks from "./page/komiks";
import Jamoa from "./page/jamoa";

function App() {
  return (
    <div className="App">
      <ParticlesComponent className="particles" />
      <Navbar />
      {/* <About />
      <Komiks /> */}
      <Jamoa/>
    </div>
  );
}

export default App;
