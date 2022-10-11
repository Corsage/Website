import React, { useRef } from 'react';
import { Canvas, RootState, useFrame } from '@react-three/fiber';
import { Camera, Mesh, Vector3 } from 'three';

/**
 * Dynamically creates waves using Three.js and react-three/fiber.
 *
 * @remarks
 * Inspired by a waves concept I once saw on codepden.
 *
 * @returns A Three.js canvas with a custom camera and GL.
 *
 * @beta
 */
const Waves = () => {
  /** Setup plane waves. */
  const setup = {
    vertexHeight: 15000,
    planeSize: 2500000,
    planeDefinition: 100,
    background: '#1D594B',
    meshColor: '#89D9C6'
  };

  /** Setup camera. */
  const camera = {
    fov: 50,
    aspect: window.innerWidth / window.innerHeight,
    near: 1,
    far: 400000,
    position: new Vector3(0, 10000, 10000)
  };

  /** Custom GL settings. */
  const setupGL = ({ gl }: RootState) => {
    gl.setSize(window.innerWidth, window.innerHeight);
    gl.setClearColor(setup.background, 0);
  };

  /**
   * Generates the waves motions (up and down).
   *
   * @param zValues - The initial z values of each pos vector.
   * @param count - Keeps track of frame for use in sin func.
   *
   * @returns A Three.js fog and mesh for the waves.
   *
   * @beta
   */
  const Scene = () => {
    const mesh = useRef<Mesh>(null!);

    let zValues: number[] = [];
    let count: number = 0;

    const updateBufferGeometry = () => {
      const geometry = mesh.current.geometry;
      const position = geometry.attributes.position;

      if (zValues.length === 0) {
        // Initial setup - we assign a random height to the z-axis
        // of each vertex.

        for (let i = 0; i < position.count; i++) {
          const height =
            position.getZ(i) +
            (Math.random() * setup.vertexHeight - setup.vertexHeight);

          position.setZ(i, height);
          zValues.push(height);
        }
      } else {
        for (let i = 0; i < position.count; i++) {
          const height =
            Math.sin(i + count * 0.00002) * (zValues[i] - zValues[i] * 0.6);
          count += 0.1;

          position.setZ(i, height);
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
      updateBufferGeometry();
    });

    return (
      <>
        <fog attach="fog" color={setup.background} near={1} far={300000} />
        <mesh ref={mesh} rotation-x={Math.PI * -0.5}>
          <planeGeometry
            attach="geometry"
            args={[
              setup.planeSize,
              setup.planeSize,
              setup.planeDefinition,
              setup.planeDefinition
            ]}
          />
          <meshBasicMaterial attach="material" color={setup.meshColor} />
        </mesh>
      </>
    );
  };

  return (
    <Canvas camera={camera} onCreated={setupGL}>
      <Scene />
    </Canvas>
  );
};

export default Waves;
