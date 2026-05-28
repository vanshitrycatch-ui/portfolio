"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Nebula OS",
        description: "A futuristic operating system interface built with React and Three.js.",
        image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1000",
        tags: ["React", "Three.js", "Tailwind"],
        link: "#",
        github: "#"
    },
    {
        title: "Quantum Ledger",
        description: "Cryptographic visualization dashboard for real-time data monitoring.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
        tags: ["Next.js", "Framer Motion", "D3.js"],
        link: "#",
        github: "#"
    },
    {
        title: "Astro Commerce",
        description: "Seamless galactic shopping experience with immersive 3D product views.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
        tags: ["TypeScript", "WebGL", "Vercel"],
        link: "#",
        github: "#"
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-6 w-full max-w-7xl mx-auto relative z-10">
            <div className="mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-space mb-4"
                >
                    Selected <span className="text-cyan-glow">Missions</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-white/50 max-w-2xl mx-auto"
                >
                    A glimpse into the digital architectures and experiences I've engineered across the universe.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group glass rounded-2xl overflow-hidden flex flex-col h-full hover:border-cyan-glow/50 transition-all duration-500"
                    >
                        <div className="relative h-48 w-full overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-space-black to-transparent opacity-60" />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-white/40 uppercase tracking-widest border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold font-space mb-2 group-hover:text-cyan-glow transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-white/60 text-sm mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <a href={project.link} className="flex items-center gap-2 text-xs font-semibold text-cyan-glow hover:underline">
                                    EXPLORE <ExternalLink className="w-3 h-3" />
                                </a>
                                <a href={project.github} className="text-white/40 hover:text-white transition-colors">
                                    <Github className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
