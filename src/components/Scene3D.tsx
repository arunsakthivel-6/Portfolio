"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Stars, Environment } from "@react-three/drei";

function RotatingObject() {
  const outerRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.15;
      outerRef.current.rotation.y = t * 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.2;
      innerRef.current.rotation.y = -t * 0.3;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={1} floatIntensity={1.5}>
      {/* Outer Glass Crystal */}
      <mesh ref={outerRef} scale={1.8}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshPhysicalMaterial
          color="#00ffff"
          emissive="#005555"
          emissiveIntensity={0.2}
          roughness={0.05}
          metalness={0.9}
          transmission={0.9} 
          ior={1.5}
          thickness={2}
          envMapIntensity={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={false}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh ref={innerRef} scale={1.2}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#00ffff"
          emissiveIntensity={2}
          roughness={0.2}
          wireframe={true}
        />
      </mesh>
      
      {/* Solid Energy Center */}
      <mesh scale={0.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00ffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
        <Environment preset="city" /> 
        
        {/* Subtle cinematic particles */}
        <group rotation={[0, 0, Math.PI / 4]}>
          <Stars 
            radius={100} 
            depth={50} 
            count={2500} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1.5} 
          />
        </group>
        
        <RotatingObject />
      </Canvas>
      
      {/* Heavy fade at the bottom to blend with background smoothly */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent z-10" />
    </div>
  );
}
