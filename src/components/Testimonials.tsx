'use client';

import { useState } from 'react';

const testimonialsData = [
    {
        id: 1,
        text: "Une prise en charge exceptionnelle pour mon chat. Le Dr Salma est d'une douceur rare et très professionnelle. Chaque détail est soigné pour le bien-être de nos compagnons.",
        name: "Mehdi Bennani",
        initials: "M"
    },
    {
        id: 2,
        text: "Un service irréprochable et un cadre magnifique. Mon chien, qui est d'habitude anxieux, s'est senti très à l'aise dès notre arrivée. Le diagnostic était précis.",
        name: "Sofia Alami",
        initials: "S"
    },
    {
        id: 3,
        text: "La meilleure clinique que j'ai visitée. L'équipe est attentive et l'équipement est à la pointe de la technologie. Je recommande vivement le Dr. Kandil.",
        name: "Youssef Tazi",
        initials: "Y"
    }
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    };

    const current = testimonialsData[currentIndex];

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-10 mb-32 scroll-mt-32" id="testimonials">
            <div className="text-center mb-16">
                <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4">Avis Vétérinaire El Jadida</h2>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-deep-brown tracking-tight">Ce que disent les propriétaires à propos de notre clinique</h3>
            </div>
            <div className="relative px-4 md:px-12">
                <div className="flex items-center justify-center gap-8 mb-12">
                    <button
                        onClick={prevTestimonial}
                        className="size-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 min-w-12 shrink-0"
                    >
                        <span className="material-symbols-outlined">west</span>
                    </button>
                    <div className="max-w-3xl w-full">
                        <div className="testimonial-card p-10 md:p-14 rounded-3xl shadow-sm border-primary/5 min-h-[350px] flex flex-col justify-center">
                            <div className="flex gap-1 mb-8 justify-center">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                ))}
                            </div>
                            <p className="text-deep-brown text-lg md:text-2xl font-serif italic mb-10 leading-relaxed text-center min-h-[100px] flex items-center justify-center">
                                &quot;{current.text}&quot;
                            </p>
                            <div className="flex flex-col items-center gap-4">
                                <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                                    {current.initials}
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-deep-brown text-lg tracking-tight">{current.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={nextTestimonial}
                        className="size-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 min-w-12 shrink-0"
                    >
                        <span className="material-symbols-outlined">east</span>
                    </button>
                </div>
                <div className="flex justify-center gap-3">
                    {testimonialsData.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40'}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}
