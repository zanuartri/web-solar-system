import { Line } from "@react-three/drei";

export default function Orbit({
  semiMajorAxis,
  eccentricity,
  inclination = 0,
}) {
  const points = [];
  const segments = 256;
  const b = semiMajorAxis * Math.sqrt(1 - eccentricity ** 2);

  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    const x = semiMajorAxis * Math.cos(theta) - semiMajorAxis * eccentricity;
    const z = b * Math.sin(theta);
    const y = Math.sin(inclination * (Math.PI / 180)) * z; // Kemiringan orbit

    points.push([x, y, z * Math.cos(inclination * (Math.PI / 180))]);
  }

  return (
    <Line
      points={points}
      color="white"
      lineWidth={0.5}
      dashed={true}
      dashSize={1}
      gapSize={0.2}
    />
  );
}
