import React from "react";

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[50, 50]} />
    <meshBasicMaterial attach="material" color="#000000" />
  </mesh>
);

export default Plane;
