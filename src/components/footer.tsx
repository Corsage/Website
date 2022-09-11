import * as React from 'react';
import { Canvas, RootState, useFrame } from '@react-three/fiber';
import { setUncaughtExceptionCaptureCallback } from 'process';

const Footer = () => {
  const mesh = React.useRef();
  const geometry = React.useRef();
  const [hovered, setHover] = React.useState(false);
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
    const [count, setCount] = React.useState(0.0);
    const [vertices, setVertices] = React.useState([]);

    const updateBufferGeometry = () => {
      const positions = geometry.current.attributes.position.array;

      // planeGeo.vertices[i].z = Math.sin(( i + count * 0.00002)) * (planeGeo.vertices[i]._myZ - (planeGeo.vertices[i]._myZ* 0.6))

      /*
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] =
          Math.sin(i + count * 0.00002) *
          (vertices[i + 2] - vertices[i + 2] * 0.6);
        setCount(count + 0.1);
      }

      geometry.current.verticesNeedUpate = true;
      */
    };

    useFrame((state: RootState, delta: number, frame?: any) => {
      const camera = state.camera;
      const x = camera.position.x;
      const z = camera.position.z;

      camera.position.x = x * Math.cos(0.001) + z * Math.sin(0.001) - 10;
      camera.position.z = z * Math.cos(0.001) - x * Math.sin(0.001) - 10;

      camera.lookAt(0, 8000, 0);

      updateBufferGeometry();
    });

    React.useEffect(() => {
      // Setup vertices for the first time.
      const positions = geometry.current.attributes.position.array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] =
          Math.random() * setup.vertexHeight - setup.vertexHeight;
      }

      // Clone it for use.
      setVertices(positions);

      // geometry.current.verticesNeedUpate = true;
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
          <planeGeometry
            ref={geometry}
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
