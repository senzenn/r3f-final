"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BoxModel } from "./models/box-model";

export default function Home() {
  return (
    <>
      <BoxModel />
    </>
  );
}
