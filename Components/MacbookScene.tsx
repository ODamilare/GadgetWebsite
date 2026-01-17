"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Group } from "three";

gsap.registerPlugin(ScrollTrigger);

function Macbook() {
  const gltf = useGLTF("/models/macbook.glb") as any;
  const ref = useRef<Group>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Subtle rotation on scroll
    gsap.to(ref.current.rotation, {
      y: Math.PI * 0.2,
      scrollTrigger: {
        trigger: ".tech-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Slight zoom out and downward movement
    gsap.to(ref.current.position, {
      z: -1.5,  // farther for medium size
      y: -0.2,
      scrollTrigger: {
        trigger: ".tech-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <primitive
      object={gltf.scene}
      ref={ref}
      scale={0.7}           // smaller than text
      position={[0, -0.3, 0]}
    />
  );
}

export function MacbookScene() {
  return (
    <Canvas
      className="absolute inset-0 z-0 pointer-events-none" // behind everything
      camera={{ position: [0, 10, 20], fov: 45 }}           // farther camera
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Macbook />
      <Environment preset="city" />
    </Canvas>
  );
}
