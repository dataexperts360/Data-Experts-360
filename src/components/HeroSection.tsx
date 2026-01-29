import React, { useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere, Float } from '@react-three/drei';

// --- Animated Data-Stream Background ---
const DataStreamBackground = () => {
  const count = 1000;
  const meshRef = useRef<THREE.Points>(null);

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16; 
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16; 
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8; 
      spd[i] = 0.01 + Math.random() * 0.03;
    }
    return [pos, spd];
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;
    const positionsArr = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      positionsArr[i * 3 + 1] -= speeds[i];
      positionsArr[i * 3 + 2] -= speeds[i] * 0.5;
      if (positionsArr[i * 3 + 1] < -8) positionsArr[i * 3 + 1] = 8;
      if (positionsArr[i * 3 + 2] < -4) positionsArr[i * 3 + 2] = 4;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#3b82f6" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
};

// --- Beautiful Tech Globe (Enhanced & Responsive) ---
const WhiteGlobe = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { size } = useThree();

  const desktopRadius = 1.8;

  // Responsive scale tiers
  let scale = 1; // default desktop
  if (size.width < 480) scale = 0.5; // very small screens
  else if (size.width < 768) scale = 0.65; // tablets / small screens

  const [positions] = useMemo(() => {
    const coords = [];
    const count = 9000;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      coords.push(
        Math.cos(theta) * Math.sin(phi) * desktopRadius,
        Math.sin(theta) * Math.sin(phi) * desktopRadius,
        Math.cos(phi) * desktopRadius
      );
    }
    return [new Float32Array(coords)];
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = t * 0.15;
      groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      {/* Core points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.012}
          color="#ffffff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Wireframe Sphere */}
      <Sphere args={[desktopRadius * 0.98, 30, 30]}>
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.12}
          wireframe
        />
      </Sphere>

      {/* Fresnel/Halo Sphere */}
      <Sphere args={[desktopRadius * 1.08, 64, 64]}>
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
};


const features = [
  'Enterprise Solutions',
  'AI-Powered Analytics',
  'Global Expertise',
  '24/7 Support',
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020617]">
      {/* Three.js Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.4} />
          <DataStreamBackground />
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <WhiteGlobe />
          </Float>
        </Canvas>
      </div>

      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-[#020617] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 pointer-events-none">
        <div className="max-w-5xl mx-auto text-center pointer-events-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold tracking-tight mb-8 text-white drop-shadow-[0_2px_8px_rgba(59,130,246,0.5)]"
          >
            Experience{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-cyan-300">
              Data-Driven
            </span>{' '}
            Mastery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We bridge the gap between complex data and actionable insights using next-gen AI architectures and enterprise-grade consulting.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                key={feature}
                className="flex items-center gap-2 text-xs md:text-sm text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-500 animate-pulse" />
                {feature}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-10 md:px-14 rounded-full h-12 md:h-14 font-semibold shadow-lg transition-all hover:brightness-110"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start Exploring <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" />
    </section>
  );
};