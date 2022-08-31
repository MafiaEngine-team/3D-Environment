import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Canvas} from 'react-three-fiber';

import Sphere from './utils/Sphere.Component';
import Plane from './utils/Plane.Component';
import Controls from './utils/Controls.Component';

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
