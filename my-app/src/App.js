import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react'
import { Canvas, extend, render, useFrame, useThree } from '@react-three/fiber'
import CameraControls from 'camera-controls'
import * as THREE from 'three'

import Sphere from './utils/Sphere.Component';
import Plane from './utils/Plane.Component';

CameraControls.install({THREE});
extend({CameraControls});


const renderer = new THREE.WebGLRenderer();
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(60, width/height, 0.01, 100);
renderer.setSize(width, height);
const cameraControls = new CameraControls(camera, renderer.domElement);
cameraControls.verticalDragToForward = true;
cameraControls.dollyToCursor = true;
cameraControls.minDistance = 200;
cameraControls.maxDistance = 1000;
cameraControls.maxZoom = 100;
cameraControls.minZoom = 100;

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
      {/* <label><input type="checkbox" onChange={() => {cameraControls.minZoom = 100;}}/>vertical drag to move forward</label> */}
      <Canvas camera={{position: [2,2,2]}}>
        <Controls/>
        {/* <fog attach="fog" args={["#000000", 5, 10]} /> */}
        <Sphere/>
        <Plane/>
        <gridHelper args={[10, 60, 'white', 'white']}/>
      </Canvas>
    </div>
  );
}

export default App;
