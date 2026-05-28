"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 98 },
    { name: "Framer Motion", level: 85 },
    { name: "Three.js / WebGL", level: 75 },
    { name: "Web Performance", level: 92 },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 px-6 w-full max-w-7xl mx-auto relative z-10">
            <div className="mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-space mb-4"
                >
                    Technical <span className="text-cyan-glow">Arsenal</span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-3">
                        <div className="flex justify-between items-end">
                            <span className="text-lg font-space font-semibold text-white/80">{skill.name}</span>
                            <span className="text-sm font-mono text-cyan-glow">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                                className="h-full bg-gradient-to-r from-cyan-glow to-purple-neon"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                {["Performance", "Immersive", "Scalable", "Futuristic"].map((item, i) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="glass p-6 rounded-xl text-center border-white/5"
                    >
                        <span className="text-xs uppercase tracking-[0.2em] text-white/40">{item}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
