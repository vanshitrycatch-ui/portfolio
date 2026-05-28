"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
        >
            <nav className="glass rounded-full px-6 py-3 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold font-space text-cyan-glow">
                    SPACE<span className="text-white">PORT</span>
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-white/70 hover:text-cyan-glow transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <button className="glass px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-cyan-glow/20 transition-all">
                    Resume
                </button>
            </nav>
        </motion.header>
    );
}
