import React from "react";
import { Canvas } from "@react-three/fiber";
import Planet from "./Planet";
import planetData from "../utils/planetData";
import { OrbitControls } from "@react-three/drei";
import Orbit from "./Orbit";
import Stars from "./Stars";

export default function SolarSystem({ speed, controlsRef, stars, planetName }) {
  return (
    <Canvas
      camera={{
        position: [0, 150, 400], // Perbesar posisi kamera
        fov: 75,
        near: 0.1, // Mengatur jarak dekat kamera
        far: 5000, // Mengatur jarak jauh kamera, agar orbit jauh tetap ter-render
      }}
      style={{ background: "#000" }}
    >
      {/* Tambahkan bintang di latar belakang */}
      {stars && <Stars count={2000} />}

      {/* Planet dan Orbit */}
      {planetData.map((planet) => (
        <React.Fragment key={planet.name}>
          <Planet
            {...planet}
            speed={speed * planet.speed}
            planetName={planetName}
          />
          <Orbit
            semiMajorAxis={planet.semiMajorAxis}
            eccentricity={planet.eccentricity}
            inclination={planet.inclination}
          />
        </React.Fragment>
      ))}

      <OrbitControls ref={controlsRef} enableZoom={true} />
    </Canvas>
  );
}
