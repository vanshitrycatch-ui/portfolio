"use client";

import React from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import FloatingPlanets from "../ui/FloatingPlanets";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
            <FloatingPlanets />

            <div className="z-10 text-center max-w-4xl pt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-widest text-cyan-glow uppercase"
                >
                    Welcome to the digital frontier
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-bold font-space text-gradient mb-8 leading-[1.1]"
                >
                    Exploring the <br />
                    <span className="text-cyan-glow text-cyan-glow">Digital Universe.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-sans"
                >
                    Building premium futuristic experiences where code meets cinematic design.
                    Step into a world of immersive interfaces and limitless possibilities.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-6"
                >
                    <button className="group relative px-8 py-4 rounded-full bg-cyan-glow text-black font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,242,255,0.5)]">
                        <span className="relative z-10 flex items-center gap-2">
                            Launch Project <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>

                    <button className="glass px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-white/10 transition-all">
                        View Research
                    </button>
                </motion.div>
            </div>

            {/* Hero Bottom Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-glow to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
