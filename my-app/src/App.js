import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import CameraControls from 'camera-controls'
import * as THREE from 'three'

import Sphere from './utils/Sphere.Component';
import Plane from './utils/Plane.Component';

CameraControls.install({THREE});
extend({CameraControls})

function Controls() {
  const ref = useRef();
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  useFrame((state, delta) => ref.current.update(delta));
  return <cameraControls ref={ref} args={[camera, gl.domElement]}/>;
}

function App() {
  return (
    <div className='container'>
      <Canvas camera={{position: [2,2,2]}}>
        <Controls/>
        <fog attach="fog" args={["#041830", 5, 10]} />
        <Sphere/>
        <Plane/>
        <gridHelper/>
      </Canvas>
    </div>
  );
}

export default App;
