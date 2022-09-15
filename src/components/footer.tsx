import React from 'react';
import { Canvas, RootState, useFrame } from '@react-three/fiber';
import { setUncaughtExceptionCaptureCallback } from 'process';

const Footer = () => {
  const mesh = React.useRef();
  // const geometry = React.useRef();

  const [hovered, setHover] = React.useState(false);

  let zValues: number[] = [];
  let count: number = 0;

  /** Setup plane waves. */
  const setup = {
    vertexHeight: 15000,
    planeSize: 1245000,
    planeDefinition: 100,
    background: '#1D594B',
    meshColor: '#89D9C6'
  };

  const camera = {
    fov: 50,
    aspect: window.innerWidth / window.innerHeight,
    near: 1,
    far: 400000,
    position: [0, 10000, 10000]
  };

  const test = ({ gl }: RootState) => {
    gl.alpha = false;
    gl.setSize(window.innerWidth, window.innerHeight);
    gl.setClearColor(setup.background, 0);
  };

  const Scene = () => {
    const updateBufferGeometry = (time: number) => {
      const geometry = mesh.current.geometry;
      const position = geometry.attributes.position;

      if (time === 0) {
        // Initial setup - we assign a random height to the z-axis
        // of each vertex.
        for (let i = 0; i < position.count; i++) {
          const height =
            Math.random() * setup.vertexHeight - setup.vertexHeight;
          position.array[i * 3 + 2] += height;
          zValues.push(position.array[i * 3 + 2]);
        }
      } else {
        for (let i = 0; i < position.count; i++) {
          position.array[i * 3 + 2] =
            Math.sin(i + count * 0.00002) * (zValues[i] - zValues[i] * 0.6);
          count += 0.1;
        }
      }

      position.needsUpdate = true;
    };

    useFrame((state: RootState, delta: number, frame?: any) => {
      const camera = state.camera;
      const time = state.clock.getElapsedTime();

      const x = camera.position.x;
      const z = camera.position.z;

      // Rotating the camera slowly in a circular fashion.
      camera.position.x = x * Math.cos(0.001) + z * Math.sin(0.001);
      camera.position.z = z * Math.cos(0.001) - x * Math.sin(0.001);

      // View from above.
      camera.lookAt(0, 7000, 0);

      // Update the vertices based on time passed.
      updateBufferGeometry(time);
    });

    return (
      <>
        <fog attach="fog" color={setup.background} near={1} far={300000} />
        <mesh
          ref={mesh}
          rotation-x={Math.PI * -0.5}
          onPointerOver={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
        >
          <planeBufferGeometry
            attach="geometry"
            args={[
              setup.planeSize,
              setup.planeSize,
              setup.planeDefinition,
              setup.planeDefinition
            ]}
          />
          <meshBasicMaterial
            attach="material"
            color={setup.meshColor}
            wireframe
          />
        </mesh>
      </>
    );
  };

  return (
    <div className="footer">
      <Canvas camera={camera} onCreated={test}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default Footer;
