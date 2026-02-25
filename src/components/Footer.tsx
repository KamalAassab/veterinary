'use client';

export function Footer() {
    return (
        <footer className="bg-cream border-t border-deep-brown/5 pt-32 pb-16 px-6 overflow-hidden relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 md:gap-24 mb-24">
                <div className="space-y-10">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 group">
                            <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary transition-transform group-hover:scale-105">
                                <span className="material-symbols-outlined text-[32px]">pets</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display font-black tracking-tight text-primary text-xl uppercase leading-none">DR. SALMA</span>
                                <span className="font-display font-medium tracking-widest text-primary text-[10px] uppercase opacity-70">KANDIL VÉTÉRINAIRE</span>
                            </div>
                        </div>
                        <div className="w-16 h-[2px] bg-primary/20"></div>
                    </div>
                    <p className="text-deep-brown/70 text-[15px] leading-relaxed max-w-xs font-medium">
                        Une approche éditoriale du soin animalier. Nous allions l&apos;excellence médicale à une compassion profonde pour offrir à vos compagnons une vie sereine et équilibrée.
                    </p>
                    <div className="flex gap-5 pt-2">
                        <a className="size-10 rounded-full border border-deep-brown/10 flex items-center justify-center text-deep-brown/60 hover:text-primary hover:border-primary/40 hover:-translate-y-1 transition-all duration-300" href="#">
                            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                        </a>
                        <a className="size-10 rounded-full border border-deep-brown/10 flex items-center justify-center text-deep-brown/60 hover:text-primary hover:border-primary/40 hover:-translate-y-1 transition-all duration-300" href="#">
                            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path></svg>
                        </a>
                        <a className="size-10 rounded-full border border-deep-brown/10 flex items-center justify-center text-deep-brown/60 hover:text-primary hover:border-primary/40 hover:-translate-y-1 transition-all duration-300" href="#">
                            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 23.689l1.514-5.526c-1.001-1.733-1.531-3.705-1.531-5.727 0-6.313 5.137-11.449 11.452-11.449 3.057 0 5.932 1.19 8.093 3.353s3.351 5.038 3.351 8.096c0 6.313-5.138 11.451-11.451 11.451-1.942 0-3.849-.494-5.539-1.429l-5.889 1.543c-.156.041-.312.019-.449-.06s-.23-.217-.261-.37zm4.116-4.576c.111.061.168.093.262.144 1.48.879 3.197 1.344 4.965 1.344 5.308 0 9.629-4.321 9.629-9.629s-4.321-9.629-9.629-9.629-9.629 4.321-9.629 9.629c0 1.874.537 3.703 1.554 5.289.062.096.096.148.163.261l-.888 3.242 3.443-.901z"></path></svg>
                        </a>
                    </div>
                </div>
                <div className="space-y-10">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-deep-brown/40 border-l-2 border-primary/30 pl-4">Navigation</h4>
                    <nav className="flex flex-col gap-5">
                        <a className="group flex items-center gap-3 text-sm font-semibold text-deep-brown/70 hover:text-primary transition-all duration-300" href="#">
                            <span className="material-symbols-outlined text-[18px] opacity-40 group-hover:opacity-100 transition-opacity">home</span>
                            <span>Accueil</span>
                        </a>
                        <a className="group flex items-center gap-3 text-sm font-semibold text-deep-brown/70 hover:text-primary transition-all duration-300" href="#about">
                            <span className="material-symbols-outlined text-[18px] opacity-40 group-hover:opacity-100 transition-opacity">person</span>
                            <span>À Propos</span>
                        </a>
                        <a className="group flex items-center gap-3 text-sm font-semibold text-deep-brown/70 hover:text-primary transition-all duration-300" href="#services">
                            <span className="material-symbols-outlined text-[18px] opacity-40 group-hover:opacity-100 transition-opacity">stethoscope</span>
                            <span>Services</span>
                        </a>
                        <a className="group flex items-center gap-3 text-sm font-semibold text-deep-brown/70 hover:text-primary transition-all duration-300" href="#gallery">
                            <span className="material-symbols-outlined text-[18px] opacity-40 group-hover:opacity-100 transition-opacity">photo_camera</span>
                            <span>Galerie</span>
                        </a>
                        <a className="group flex items-center gap-3 text-sm font-semibold text-deep-brown/70 hover:text-primary transition-all duration-300" href="#contact">
                            <span className="material-symbols-outlined text-[18px] opacity-40 group-hover:opacity-100 transition-opacity">mail</span>
                            <span>Contact</span>
                        </a>
                    </nav>
                </div>
                <div className="space-y-10">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-deep-brown/40 border-l-2 border-primary/30 pl-4">Contact</h4>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary/60 text-xl mt-0.5">call</span>
                            <div>
                                <p className="text-[9px] uppercase tracking-widest text-deep-brown/40 font-bold mb-1">Téléphone</p>
                                <p className="text-sm font-bold text-deep-brown/80 tracking-tight">+212 6 89 01 83 05</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary/60 text-xl mt-0.5">location_on</span>
                            <div>
                                <p className="text-[9px] uppercase tracking-widest text-deep-brown/40 font-bold mb-1">Adresse</p>
                                <p className="text-sm font-semibold text-deep-brown/70 leading-relaxed">Villa N°45, Avenue Ibn Badis,<br />El Jadida</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary/60 text-xl mt-0.5">alternate_email</span>
                            <div>
                                <p className="text-[9px] uppercase tracking-widest text-deep-brown/40 font-bold mb-1">Email</p>
                                <p className="text-sm font-semibold text-deep-brown/70">contact@drsalmakandil.ma</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-10">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-deep-brown/40 border-l-2 border-primary/30 pl-4">Horaires</h4>
                    <div className="flex flex-col gap-5 text-sm font-semibold text-deep-brown/70">
                        <div className="flex justify-between items-center border-b border-deep-brown/5 pb-3">
                            <span className="opacity-60">Lun — Ven</span>
                            <span className="text-deep-brown font-bold">09:00 - 19:00</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-deep-brown/5 pb-3">
                            <span className="opacity-60">Samedi</span>
                            <span className="text-deep-brown font-bold">09:00 - 13:00</span>
                        </div>
                        <div className="flex justify-between items-center pb-1">
                            <span className="opacity-60">Dimanche</span>
                            <span className="text-primary font-bold italic text-xs uppercase tracking-wider">Urgences</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto pt-10 border-t border-deep-brown/5">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-10 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-deep-brown/40">
                        <span>© 2024 Dr. Salma Kandil. Tous droits réservés.</span>
                        <div className="flex gap-6">
                            <a className="hover:text-primary transition-colors" href="#">Mentions Légales</a>
                            <a className="hover:text-primary transition-colors" href="#">Confidentialité</a>
                        </div>
                    </div>
                    <a className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.25em] text-deep-brown/50 hover:text-primary transition-all duration-300" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                        <span>Retour en haut</span>
                        <div className="size-10 rounded-full border border-deep-brown/10 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <span className="material-symbols-outlined text-sm">arrow_upward</span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
}
