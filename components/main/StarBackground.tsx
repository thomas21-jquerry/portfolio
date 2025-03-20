"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-expect-error: maath/random types are not properly defined
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const StarBackground = (props: React.ComponentPropsWithoutRef<'group'>) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => {
    // Ensure the Float32Array is properly initialized and populated
    const points = new Float32Array(5000 * 3); // 5000 points, 3 coordinates each (x, y, z)
    return random.inSphere(points, { radius: 1.2 });
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff" // Fixed color syntax
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false} // Fixed typo
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
        <Preload all /> {/* Add Preload to ensure resources are loaded */}
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;