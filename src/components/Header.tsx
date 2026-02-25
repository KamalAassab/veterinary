'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <>
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl">
                <div className="glass-nav rounded-full px-6 py-3 flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-3">
                        <div className="size-8 bg-primary rounded-full flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-[20px]">pets</span>
                        </div>
                        <span className="font-display font-bold tracking-tight text-deep-brown uppercase">DR. SALMA KANDIL</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase">
                        <a className="text-deep-brown/60 hover:text-primary transition-colors" href="#about">À Propos</a>
                        <a className="text-deep-brown/60 hover:text-primary transition-colors" href="#services">Services</a>
                        <a className="text-deep-brown/60 hover:text-primary transition-colors" href="#gallery">Galerie</a>
                        <a className="text-deep-brown/60 hover:text-primary transition-colors" href="#contact">Contact</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20 hidden md:block" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            RÉSERVER
                        </button>
                        <button
                            className="md:hidden text-deep-brown p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[90] bg-cream/95 backdrop-blur-sm pt-32 px-6 flex flex-col md:hidden"
                    >
                        <div className="flex flex-col gap-8 text-2xl font-display font-bold tracking-tight text-center">
                            <a href="#about" onClick={() => setMobileMenuOpen(false)}>À Propos</a>
                            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
                            <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Galerie</a>
                            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                        </div>
                        <div className="mt-12 flex justify-center">
                            <button
                                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:brightness-110 shadow-lg shadow-primary/20"
                                onClick={() => {
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                    setMobileMenuOpen(false);
                                }}
                            >
                                RÉSERVER
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
