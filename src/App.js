import Navbar from "./page/nav/navbar";
import "./app.css";
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
