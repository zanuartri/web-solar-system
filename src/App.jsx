import "./App.css";
import SolarSystem from "./components/SolarSystem";
import Controls from "./components/Controls";
import { useState, useRef } from "react";
import PlanetInfo from "./components/PlanetInfo";
import OrbitInfo from "./components/OrbitInfo";
import { FaGithub } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import Stars from "./components/Stars";

function App() {
  const [speed, setSpeed] = useState(1);
  const [stars, setStars] = useState(true);
  const [planetName, setPlanetName] = useState(true);
  const controlsRef = useRef(null);

  return (
    <>
      {/* mobile view */}{" "}
      <div className="block md:hidden relative w-full h-screen">
        <Canvas
          camera={{
            position: [0, 150, 400], // Perbesar posisi kamera
            fov: 75,
            near: 0.1, // Mengatur jarak dekat kamera
            far: 5000, // Mengatur jarak jauh kamera, agar orbit jauh tetap ter-render
          }}
          style={{ position: "absolute", inset: 0, background: "#000" }}
        >
          {stars && <Stars count={2000} />}
        </Canvas>

        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="text-white text-sm font-bold bg-white/10 py-8 px-6 rounded-2xl w-[200px] text-center">
            Fitur ini hanya tersedia di desktop
          </div>
        </div>
      </div>
      {/* desktop view */}
      <div className="hidden md:block w-full h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
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
          <a
            href="https://github.com/zanuartri/web-solar-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={32} />
          </a>
        </button>
      </div>
    </>
  );
}

export default App;
