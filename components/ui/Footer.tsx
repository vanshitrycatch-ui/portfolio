"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-space-black/50 backdrop-blur-md py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <Link href="/" className="text-2xl font-bold font-space text-cyan-glow">
                        SPACE<span className="text-white">PORT</span>
                    </Link>
                    <p className="text-white/40 text-sm mt-2 font-sans">
                        © 2026 Vanshi. All rights reserved. <br className="md:hidden" />
                        Crafted for the future.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="p-3 glass rounded-full hover:text-cyan-glow hover:border-cyan-glow/30 transition-all">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 glass rounded-full hover:text-cyan-glow hover:border-cyan-glow/30 transition-all">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 glass rounded-full hover:text-cyan-glow hover:border-cyan-glow/30 transition-all">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 glass rounded-full hover:text-cyan-glow hover:border-cyan-glow/30 transition-all">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>

                <div className="flex gap-8 text-xs uppercase tracking-widest text-white/40">
                    <Link href="#about" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="#contact" className="hover:text-white transition-colors">Terms</Link>
                    <Link href="#projects" className="hover:text-white transition-colors">Protocols</Link>
                </div>
            </div>
        </footer>
    );
}
