import React, { useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Stars({ count = 2000, radius = 2000 }) {
  const starGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = [];

    for (let i = 0; i < count; i++) {
      // Distribusi acak dalam bola 3D
      const theta = Math.random() * 2 * Math.PI; // Sudut horizontal (0 - 360°)
      const phi = Math.acos(2 * Math.random() - 1); // Sudut vertikal (0 - 180°)
      const distance = radius + Math.random() * 500; // Jarak acak dari pusat

      // Konversi ke koordinat Cartesian (X, Y, Z)
      const x = distance * Math.sin(phi) * Math.cos(theta);
      const y = distance * Math.sin(phi) * Math.sin(theta);
      const z = distance * Math.cos(phi);

      positions.push(x, y, z);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geometry;
  }, [count, radius]);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      color: "#ffffff",
      size: 2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
    });
  }, []);

  // Efek rotasi lambat untuk kesan "hidup"
  useFrame(() => {
    starGeometry.rotateY(0.0003); // Rotasi horizontal
    starGeometry.rotateX(0.0001); // Rotasi vertikal (lebih lambat)
  });

  return <points geometry={starGeometry} material={material} />;
}
