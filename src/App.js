import Navbar from "./page/nav_foot/navbar";
import "./app.css";
import ParticlesBackground from "./ParticlesBackground";
import ParticlesComponent from "./ParticlesBackground";

function App() {
  return (
    <div className="App">
      <ParticlesComponent className="particles" />
      <Navbar />
    </div>
  );
}

export default App;
