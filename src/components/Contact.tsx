'use client';

export function Contact() {
    return (
        <section className="relative w-full flex flex-col-reverse md:block md:h-[650px] scroll-mt-32" id="contact">
            {/* Map Container */}
            <div className="w-full h-[400px] md:h-full md:absolute md:inset-0 grayscale contrast-[1.1] brightness-[0.95] overflow-hidden pointer-events-none z-0 flex items-center justify-center">
                <iframe
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?q=Cabinet+V%C3%A9t%C3%A9rinaire+Dr.Salma+Kandil&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    style={{ border: 0 }}
                    className="w-[150%] h-[150%] md:w-[120%] md:h-[120%] max-w-none pointer-events-none"
                ></iframe>
            </div>

            {/* Contact Card Container */}
            <div className="relative z-20 w-full mb-8 md:mb-0 md:h-full flex items-center md:pointer-events-none">
                <div className="w-full max-w-7xl mx-auto px-4 md:px-10">
                    <div className="glass-card md:max-w-md p-8 md:p-12 rounded-[2.5rem] pointer-events-auto overflow-hidden relative">
                        {/* Mobile Background Addon to ensure readability outside the overlay */}
                        <div className="absolute inset-0 bg-white/95 md:bg-transparent -z-10"></div>

                        <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 relative z-10">Contact</h2>
                        <h3 className="font-display text-4xl font-bold text-deep-brown tracking-tight mb-10 relative z-10">Nous trouver</h3>
                        <div className="space-y-8 relative z-10 mb-8 md:mb-10">
                            <div className="flex gap-5 items-start">
                                <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 text-primary">
                                    <span className="material-symbols-outlined text-xl">location_on</span>
                                </div>
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest font-black text-deep-brown/40 mb-1">Adresse</p>
                                    <p className="text-deep-brown font-semibold leading-relaxed">Villa N°45, Avenue Ibn Badis,<br />El Jadida, Maroc</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start">
                                <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 text-primary">
                                    <span className="material-symbols-outlined text-xl">call</span>
                                </div>
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest font-black text-deep-brown/40 mb-1">Téléphone</p>
                                    <p className="text-deep-brown font-bold text-lg">+212 6 89 01 83 05</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start">
                                <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 text-primary">
                                    <span className="material-symbols-outlined text-xl">schedule</span>
                                </div>
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest font-black text-deep-brown/40 mb-1">Horaires d&apos;ouverture</p>
                                    <div className="text-deep-brown text-sm space-y-1 font-medium">
                                        <p className="flex justify-between gap-8"><span>Lun - Ven:</span> <span className="font-bold">09:00 - 19:00</span></p>
                                        <p className="flex justify-between gap-8"><span>Samedi:</span> <span className="font-bold">09:00 - 13:00</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Cabinet+Vétérinaire+Dr.Salma+Kandil,+El+Jadida,+Morocco"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 w-full bg-primary hover:bg-primary/90 text-white font-bold text-base md:text-lg py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1"
                        >
                            <span className="material-symbols-outlined">directions_car</span>
                            Itinéraire
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
