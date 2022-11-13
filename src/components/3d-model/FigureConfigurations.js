import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

import * as THREE from "three";

const shape = new THREE.Shape();

let sizeX = 5;
let sizeY = 3;
let radius = 0.5;

let halfX = sizeX * 0.5 - radius;
let halfY = sizeY * 0.5 - radius;
let baseAngle = Math.PI * 0.5;
shape.absarc(halfX, halfY, radius, baseAngle * 0, baseAngle * 0 + baseAngle);
shape.absarc(-halfX, halfY, radius, baseAngle * 1, baseAngle * 1 + baseAngle);
shape.absarc(-halfX, -halfY, radius, baseAngle * 2, baseAngle * 2 + baseAngle);
shape.absarc(halfX, -halfY, radius, baseAngle * 3, baseAngle * 3 + baseAngle);

const Figure = (props) => {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.x += 0.003));
  useFrame((state, delta) => (ref.current.rotation.y += 0.003));

  const figureConfig = {
    steps: 3,
    depth: 5,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelOffset: 1,
    bevelSegments: 5,
  };

  return (
    <mesh {...props} ref={ref} scale={0.4}>
      <extrudeBufferGeometry attach="geometry" args={[shape, figureConfig]} />
      <meshStandardMaterial wireframe={props.wireframe} color={props.color} />
    </mesh>
  );
};

export default Figure;
