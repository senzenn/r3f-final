"use client ";
import { OrbitControls, Wireframe } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
// @typescript-eslint/no-unused-vars
export const BoxModel = () => {
  return (
    <>
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
        }}
        camera={{ position: [12, 12, 9] }}
      >
        <motion.mesh
          animate={{
            x: 12,
            y: 12,
          }}
        >
          <OrbitControls />
          <torusGeometry />
          <Wireframe />
        </motion.mesh>
      </Canvas>
    </>
  );
};
