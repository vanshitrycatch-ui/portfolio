"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function StarField() {
    const ref = useRef<THREE.Points>(null);

    // Generate random positions for stars
    const positions = useMemo(() => {
        const pos = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

function ShootingStar() {
    const ref = useRef<THREE.Mesh>(null);
    const [active, setActive] = React.useState(false);

    useFrame((state, delta) => {
        if (!active && Math.random() > 0.995) {
            setActive(true);
            if (ref.current) {
                ref.current.position.set(
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    -5
                );
            }
        }

        if (active && ref.current) {
            ref.current.position.x += delta * 5;
            ref.current.position.y += delta * 2;
            ref.current.position.z += delta * 5;

            if (ref.current.position.x > 5 || ref.current.position.y > 5) {
                setActive(false);
            }
        }
    });

    return (
        <mesh ref={ref} visible={active}>
            <sphereGeometry args={[0.01, 8, 8]} />
            <meshBasicMaterial color="#00f2ff" transparent opacity={0.8} />
        </mesh>
    );
}

export default function SpaceBackground() {
    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <StarField />
                <ShootingStar />
                {/* Ambient Nebula Glow */}
                <ambientLight intensity={0.5} />
            </Canvas>
            {/* Overlay for cinematic feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-black/50 to-space-black pointer-events-none" />
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        </div>
    );
}
