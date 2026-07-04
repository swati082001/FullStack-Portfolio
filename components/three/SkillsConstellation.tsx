"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text, Sphere, Line } from "@react-three/drei";
import * as THREE from "three";
import { skills, Skill } from "@/data/portfolio";

const CATEGORY_COLORS: Record<Skill["category"], string> = {
  frontend: "#6366f1",
  backend: "#a855f7",
  infra: "#06b6d4",
  tools: "#f59e0b",
};

function SkillNode({ skill, position }: { skill: Skill; position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const color = CATEGORY_COLORS[skill.category];
  const radius = 0.08 + skill.level * 0.12;

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.3;
    const target = hovered ? 1.3 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(target, target, target), 0.1);
  });

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[radius, 16, 16]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.3}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
      {hovered && (
        <Text
          position={[0, radius + 0.15, 0]}
          fontSize={0.12}
          color={color}
          anchorX="center"
          anchorY="bottom"
          font={undefined}
        >
          {skill.name}
        </Text>
      )}
    </group>
  );
}

function ConstellationLines({ positions }: { positions: [number, number, number][] }) {
  const lines = useMemo(() => {
    const pairs: [[number, number, number], [number, number, number]][] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dx = positions[i][0] - positions[j][0];
        const dy = positions[i][1] - positions[j][1];
        const dz = positions[i][2] - positions[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.8) pairs.push([positions[i], positions[j]]);
      }
    }
    return pairs;
  }, [positions]);

  return (
    <>
      {lines.map((pair, i) => (
        <Line key={i} points={pair} color="#818cf8" lineWidth={0.5} transparent opacity={0.2} />
      ))}
    </>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.05;
  });

  const positions = useMemo<[number, number, number][]>(() => {
    const golden = Math.PI * (3 - Math.sqrt(5));
    return skills.map((_, i) => {
      const y = 1 - (i / (skills.length - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      return [Math.cos(theta) * r * 2.5, y * 2.5, Math.sin(theta) * r * 2.5];
    });
  }, []);

  return (
    <group ref={groupRef}>
      <ConstellationLines positions={positions} />
      {skills.map((skill, i) => (
        <SkillNode key={skill.name} skill={skill} position={positions[i]} />
      ))}
    </group>
  );
}

export default function SkillsConstellation() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#6366f1" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#a855f7" />
      <Scene />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  );
}
