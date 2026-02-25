'use client';

export function Services() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-10 mb-32 scroll-mt-32" id="services">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Services Vétérinaires</h2>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-deep-brown tracking-tight">Nos Spécialités à El Jadida</h3>
                <p className="text-deep-brown/50 max-w-xl mx-auto text-sm">
                    Des soins d&apos;excellence prodigués avec les dernières technologies médicales dans notre clinique d&apos;El Jadida, un environnement apaisant conçu pour le confort de vos animaux.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="service-card rounded-2xl p-8 flex flex-col items-start">
                    <div className="size-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
                        <span className="material-symbols-outlined text-3xl">medical_services</span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-deep-brown mb-3">Médecine Générale</h4>
                    <p className="font-body text-sm text-deep-brown/60 leading-relaxed">
                        Bilans de santé complets, vaccinations et soins préventifs.
                    </p>
                </div>
                <div className="service-card rounded-2xl p-8 flex flex-col items-start">
                    <div className="size-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
                        <span className="material-symbols-outlined text-3xl">biotech</span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-deep-brown mb-3">Diagnostics</h4>
                    <p className="font-body text-sm text-deep-brown/60 leading-relaxed">
                        Laboratoire sur place, radiographie numérique et échographie.
                    </p>
                </div>
                <div className="service-card rounded-2xl p-8 flex flex-col items-start">
                    <div className="size-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
                        <span className="material-symbols-outlined text-3xl">content_cut</span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-deep-brown mb-3">Chirurgie</h4>
                    <p className="font-body text-sm text-deep-brown/60 leading-relaxed">
                        Interventions des tissus mous et orthopédie en bloc stérile.
                    </p>
                </div>
                <div className="service-card rounded-2xl p-8 flex flex-col items-start">
                    <div className="size-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
                        <span className="material-symbols-outlined text-3xl">spa</span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-deep-brown mb-3">Toilettage</h4>
                    <p className="font-body text-sm text-deep-brown/60 leading-relaxed">
                        Soins médicaux et spa adaptés à toutes les races.
                    </p>
                </div>
                <div className="service-card rounded-2xl p-8 flex flex-col items-start">
                    <div className="size-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
                        <span className="material-symbols-outlined text-3xl">vaccines</span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-deep-brown mb-3">Vaccinations</h4>
                    <p className="font-body text-sm text-deep-brown/60 leading-relaxed">
                        Protocoles personnalisés pour chiots, chatons et seniors.
                    </p>
                </div>
                <div className="service-card rounded-2xl p-8 flex flex-col items-start">
                    <div className="size-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
                        <span className="material-symbols-outlined text-3xl">medication</span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-deep-brown mb-3">Pharmacie</h4>
                    <p className="font-body text-sm text-deep-brown/60 leading-relaxed">
                        Pharmacie complète pour tous les besoins médicaux immédiats.
                    </p>
                </div>
            </div>
        </section>
    );
}
