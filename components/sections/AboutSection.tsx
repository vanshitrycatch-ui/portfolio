"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 w-full max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-space mb-8">
                        Pioneering the <span className="text-cyan-glow">Future</span> of Web.
                    </h2>
                    <div className="space-y-6 text-lg text-white/70 font-sans leading-relaxed">
                        <p>
                            I am a digital architect specializing in creating high-performance,
                            visually stunning web experiences. My mission is to bridge the gap between
                            functionality and cinematic aesthetics.
                        </p>
                        <p>
                            With a deep obsession for motion design and futuristic interfaces,
                            I build digital environments that feel alive. Every pixel is calculated,
                            every animation is intentional.
                        </p>
                        <div className="pt-6 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-cyan-glow font-space font-bold text-2xl">05+</h4>
                                <p className="text-white/40 text-sm uppercase tracking-tighter">Years of Exploration</p>
                            </div>
                            <div>
                                <h4 className="text-cyan-glow font-space font-bold text-2xl">50+</h4>
                                <p className="text-white/40 text-sm uppercase tracking-tighter">Missions Completed</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-square max-w-md mx-auto"
                >
                    <div className="absolute inset-0 rounded-3xl border border-cyan-glow/30 animate-pulse-slow" />
                    <div className="absolute inset-4 rounded-2xl border border-purple-neon/20 rotate-6" />
                    <div className="absolute inset-0 glass rounded-3xl flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-grid opacity-10" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-1/2 h-1/2 rounded-full border-2 border-dashed border-cyan-glow/20 flex items-center justify-center"
                        >
                            <div className="w-3/4 h-3/4 rounded-full border-2 border-dashed border-purple-neon/20 animate-spin" />
                        </motion.div>
                        <span className="text-4xl font-space font-bold text-white z-10">CORE</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
