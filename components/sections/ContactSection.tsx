"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Globe } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 px-6 w-full max-w-7xl mx-auto relative z-10">
            <div className="mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-space mb-4"
                >
                    Establish <span className="text-cyan-glow">Connection</span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 md:p-12 rounded-3xl border-white/5"
                >
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Identification</label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-glow/50 transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Signal Address</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-glow/50 transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Transmission</label>
                            <textarea
                                rows={4}
                                placeholder="Message"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-glow/50 transition-all resize-none"
                            />
                        </div>
                        <button className="w-full group py-4 rounded-xl bg-cyan-glow text-black font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all">
                            SEND SIGNAL <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center space-y-10"
                >
                    <div className="space-y-6">
                        <h3 className="text-2xl font-space font-bold">Contact Metadata</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border-white/5 group-hover:border-cyan-glow/30 transition-all">
                                    <Mail className="w-5 h-5 text-cyan-glow" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-white/40">Email</p>
                                    <p className="text-white/80">vanshi@space-explorer.io</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border-white/5 group-hover:border-cyan-glow/30 transition-all">
                                    <MapPin className="w-5 h-5 text-cyan-glow" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-white/40">Location</p>
                                    <p className="text-white/80">Earth Orbit, Digital Grid</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border-white/5 group-hover:border-cyan-glow/30 transition-all">
                                    <Globe className="w-5 h-5 text-cyan-glow" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-white/40">Network</p>
                                    <p className="text-white/80">Available Worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 glass rounded-2xl border-dashed border-cyan-glow/20">
                        <p className="text-sm text-white/50 italic font-sans">
                            "The universe is not just space, it's a grid waiting to be explored.
                            Let's build something extraordinary together."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
