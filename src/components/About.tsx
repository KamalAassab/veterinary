'use client';

export function About() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-10 py-24 md:py-48 scroll-mt-32" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 md:gap-24">
                <div className="relative">
                    <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt="Portrait du Dr. Salma Kandil"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtB2NdN86Pn6mn66p1M0IwTmMt4ZcXSocFTVJIU6OUROXavhMXAeNgiQOggxL6Gh5MYUTggfDJesL_nMDIldrBHfwFUHMaUFCtytTAxRnod23RbIExGZifGRDgIQ4aChnKsDBRsajuiSd55BXalVkamG6UNSJC8MWzmVDS9j2-XmwwdcTNtVfoyi2rQ-xgmY57Sr6ndOQUo5eRvCWPVQiwzhy4nkBvwLKZwhMGwHry2Zdg3MBcTTitC-8R8XvaOi5Mmkiwet2jDPs"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="font-display text-3xl font-bold text-primary tracking-tight mb-4">
                        Dr. Salma Kandil
                    </h2>
                    <div className="w-full flex gap-12 mb-10">
                        <div className="space-y-1">
                            <span className="block text-3xl font-bold text-primary">+15</span>
                            <span className="block text-[10px] font-medium uppercase tracking-widest text-charcoal/40 leading-tight">Ans d&apos;Expérience</span>
                        </div>
                        <div className="space-y-1">
                            <span className="block text-3xl font-bold text-primary">5k+</span>
                            <span className="block text-[10px] font-medium uppercase tracking-widest text-charcoal/40 leading-tight">Animaux Soignés</span>
                        </div>
                        <div className="space-y-1">
                            <span className="block text-3xl font-bold text-primary">8k+</span>
                            <span className="block text-[10px] font-medium uppercase tracking-widest text-charcoal/40 leading-tight">Consultations</span>
                        </div>
                    </div>
                    <div className="space-y-6 max-w-xl mb-12">
                        <p className="font-serif text-2xl text-deep-brown/90 leading-snug italic">
                            &quot;Diplômée des plus grandes instances, le Dr. Salma allie rigueur scientifique et une approche holistique pour garantir le bien-être de vos compagnons.&quot;
                        </p>
                        <p className="font-body text-base text-deep-brown/70 leading-relaxed">
                            Sa vision est de créer un sanctuaire de guérison où la nature et la médecine se rencontrent. Chaque diagnostic est le fruit d&apos;une analyse minutieuse, transformant chaque visite vétérinaire en une expérience sereine et rassurante, tant pour l&apos;animal que pour son gardien.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-primary/80 text-2xl">stethoscope</span>
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-deep-brown/60" style={{ fontVariant: 'small-caps' }}>Expertise</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-primary/80 text-2xl">favorite</span>
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-deep-brown/60" style={{ fontVariant: 'small-caps' }}>Empathie</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-primary/80 text-2xl">schedule</span>
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-deep-brown/60" style={{ fontVariant: 'small-caps' }}>Disponibilité</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
