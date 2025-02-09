import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Text } from "@react-three/drei"; // Import untuk Text

export default function Planet({
  name,
  size,
  semiMajorAxis,
  eccentricity,
  color,
  speed,
  inclination,
  planetName,
}) {
  const mesh = useRef(null);
  const textRef = useRef(null); // Referensi untuk teks

  // Set posisi awal planet dengan semiMajorAxis dan eccentricity
  useEffect(() => {
    if (mesh.current) {
      mesh.current.position.set(semiMajorAxis, 0, 0); // Posisi awal planet
    }
  }, [semiMajorAxis]);

  // Update posisi planet untuk orbit dan posisi teks
  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime() * speed;

    if (mesh.current) {
      // Hitung posisi planet dengan orbit berbentuk elips
      const x = semiMajorAxis * Math.cos(t) - semiMajorAxis * eccentricity;
      const z = semiMajorAxis * Math.sin(t) * Math.sqrt(1 - eccentricity ** 2);
      const y = Math.sin(inclination * (Math.PI / 180)) * z; // Kemiringan orbit

      mesh.current.position.set(x, y, z);

      // Pastikan teks mengikuti posisi planet dan selalu berada di atasnya
      if (textRef.current) {
        textRef.current.position.set(x, y + size + 3, z);
        textRef.current.lookAt(camera.position); // Pastikan teks selalu menghadap kamera
      }
    }
  });

  return (
    <>
      {/* Planet */}
      <mesh ref={mesh}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Nama Planet yang mengikuti planet dan menghadap kamera */}
      {planetName && (
        <Text
          ref={textRef}
          fontSize={5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      )}
    </>
  );
}
