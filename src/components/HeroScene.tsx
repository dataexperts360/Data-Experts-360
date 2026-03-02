"use client";

import React, { useRef, useMemo } from 'react';
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
        // @ts-ignore
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            {/* @ts-ignore */}
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

    const elapsedTimeRef = useRef(0);
    useFrame((_state, delta) => {
        elapsedTimeRef.current += delta;
        if (groupRef.current) {
            const t = elapsedTimeRef.current;
            groupRef.current.rotation.y = t * 0.15;
            groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
        }
    });

    return (
        <group ref={groupRef} scale={[scale, scale, scale]}>
            {/* Core points */}
            {/* @ts-ignore */}
            <points>
                {/* @ts-ignore */}
                <bufferGeometry>
                    {/* @ts-ignore */}
                    <bufferAttribute
                        attach="attributes-position"
                        count={positions.length / 3}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                {/* @ts-ignore */}
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

export const HeroScene = () => {
    return (
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <ambientLight intensity={0.4} />
            <DataStreamBackground />
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <WhiteGlobe />
            </Float>
        </Canvas>
    );
};

export default HeroScene;
