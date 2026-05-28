"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PlanetProps {
    size: string;
    color: string;
    top: string;
    left: string;
    delay?: number;
    initialY?: number;
}

const Planet = ({ size, color, top, left, delay = 0, initialY = 0 }: PlanetProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: initialY }}
            animate={{ opacity: 1, scale: 1, y: initialY }}
            transition={{ duration: 1.5, delay, ease: "easeOut" }}
            style={{ top, left, width: size, height: size }}
            className="absolute"
        >
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay
                }}
                className={cn(
                    "w-full h-full rounded-full blur-[2px] relative overflow-hidden",
                    color
                )}
            >
                {/* Planet Surface Texture Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,white,transparent)]" />
            </motion.div>
            {/* Outer Glow */}
            <div className={cn(
                "absolute inset-0 rounded-full blur-xl opacity-20 -z-10",
                color
            )} />
        </motion.div>
    );
};

import { cn } from "@/lib/utils";

export default function FloatingPlanets() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Planet
                size="150px"
                color="bg-purple-900/40"
                top="15%"
                left="10%"
                delay={0.2}
            />
            <Planet
                size="200px"
                color="bg-cyan-900/30"
                top="60%"
                left="80%"
                delay={0.4}
                initialY={100}
            />
            <Planet
                size="80px"
                color="bg-blue-800/40"
                top="30%"
                left="75%"
                delay={0.6}
            />
        </div>
    );
}
