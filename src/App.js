import Navbar from "./page/nav/navbar";
import "./app.css";
import ParticlesComponent from "./ParticlesBackground";
import About from "./page/about";

function App() {
  return (
    <div className="App">
      <ParticlesComponent className="particles" />
      <Navbar />
      <About/>
    </div>
  );
}

export default App;
