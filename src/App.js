import Navbar from "./page/nav/navbar";
import "./app.css";
import ParticlesComponent from "./ParticlesBackground";
import About from "./page/about";
import Komiks from "./page/komiks";

function App() {
  return (
    <div className="App">
      <ParticlesComponent className="particles" />
      <Navbar />
      <About/>
      <Komiks/>
    </div>
  );
}

export default App;
