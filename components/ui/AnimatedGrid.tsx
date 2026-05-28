"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedGrid() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-grid opacity-[0.03]" />
            <motion.div
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]"
            />
        </div>
    );
}
