'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "À quel âge dois-je faire vacciner mon chiot ou mon chaton ?",
        answer: "La première vaccination pour un chiot ou un chaton doit généralement être effectuée vers l'âge de 8 semaines, avec des rappels à 12 et 16 semaines. Nous établirons un calendrier personnalisé lors de votre première visite."
    },
    {
        question: "À quelle fréquence mon animal doit-il consulter le vétérinaire ?",
        answer: "Un bilan de santé annuel est recommandé pour les animaux adultes. Pour les animaux âgés (plus de 7 ans) ou ceux ayant des problèmes de santé chroniques, des visites semestrielles ou trimestrielles peuvent être nécessaires."
    },
    {
        question: "Quels sont les signes d'une urgence vétérinaire ?",
        answer: "Les signes incluent : difficultés respiratoires, saignements importants, convulsions, incapacité à uriner, vomissements répétés, gonflement soudain de l'abdomen, ou un animal qui ne tient plus sur ses pattes. En cas de doute, contactez-nous immédiatement."
    },
    {
        question: "Proposez-vous des services de toilettage ?",
        answer: "Oui, notre clinique d'El Jadida propose un service de toilettage professionnel incluant le bain, la tonte, la coupe des griffes et le nettoyage des oreilles. Le tout dans un environnement rassurant pour minimiser le stress de votre animal."
    },
    {
        question: "Comment puis-je prendre rendez-vous avec le Dr. Kandil ?",
        answer: "Vous pouvez prendre rendez-vous en nous appelant directement au numéro figurant sur le site, ou en nous contactant via nos réseaux sociaux. Pour les urgences, veuillez toujours nous téléphoner."
    }
];

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="max-w-4xl mx-auto px-4 md:px-10 mb-20 md:mb-32 scroll-mt-32" id="faq">
            <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
                <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm">FAQ</h2>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-deep-brown tracking-tight">Questions Fréquentes</h3>
                <p className="text-deep-brown/60 max-w-xl mx-auto text-sm">
                    Retrouvez les réponses aux questions les plus courantes concernant la santé de vos animaux de compagnie à El Jadida.
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-primary/50 bg-white/50 shadow-sm' : 'border-primary/10 bg-white/20 hover:border-primary/30'}`}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full text-left px-5 py-4 md:px-8 md:py-6 flex justify-between items-center focus:outline-none"
                            aria-expanded={openIndex === index}
                        >
                            <span className="font-bold text-deep-brown text-base md:text-lg pr-4 leading-snug">{faq.question}</span>
                            <span
                                className={`material-symbols-outlined shrink-0 text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                            >
                                expand_more
                            </span>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-5 pb-5 md:px-8 md:pb-6 text-sm md:text-base text-deep-brown/70 leading-relaxed font-body">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
