import "./App.css";
import SolarSystem from "./components/SolarSystem";
import Controls from "./components/Controls";
import { useState, useRef } from "react";
import PlanetInfo from "./components/PlanetInfo";
import OrbitInfo from "./components/OrbitInfo";
import { FaGithub } from "react-icons/fa";

function App() {
  const [speed, setSpeed] = useState(1);
  const [stars, setStars] = useState(true);
  const [planetName, setPlanetName] = useState(true);
  const controlsRef = useRef(null);

  return (
    <div className="w-full h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute top-4 left-4 z-50 flex flex-col gap-[16px] p-[16px] w-[300px]">
        <PlanetInfo />
        <OrbitInfo />
      </div>
      <div className="absolute top-4 right-4 flex flex-col gap-[16px] p-[16px] w-[200px]">
        <Controls
          speed={speed}
          setSpeed={setSpeed}
          controlsRef={controlsRef}
          stars={stars}
          setStars={setStars}
          planetName={planetName}
          setPlanetName={setPlanetName}
        />
      </div>
      <SolarSystem
        speed={speed}
        controlsRef={controlsRef}
        stars={stars}
        planetName={planetName}
      />
      <button className="absolute bottom-4 right-4 text-white/50 hover:text-white/70 hover:cursor-pointer p-4">
        <FaGithub size={32} />
      </button>
    </div>
  );
}

export default App;
