'use client';

export function Gallery() {
    const galleryItems = Array.from({ length: 11 }, (_, i) => ({
        imgSrc: `/${i + 1}.jpg`,
        alt: `Image de la clinique ${i + 1}`,
        title: "Notre Espace"
    }));

    return (
        <section className="mb-0 scroll-mt-32" id="gallery">
            <div className="max-w-7xl mx-auto px-4 md:px-10 text-center mb-12">
                <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4">Galerie</h2>
                <h3 className="font-display text-4xl font-bold text-deep-brown mb-4">Notre Espace</h3>
                <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-primary"></div>
                </div>
            </div>
            <div className="w-full relative group mb-16 overflow-hidden">
                {/* Fade masks for smooth entry/exit */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-max animate-gallery-marquee hover-pause pt-4 pb-12">
                    {[...galleryItems, ...galleryItems].map((item, index) => (
                        <div key={index} className="w-[85vw] sm:w-[45vw] lg:w-[25vw] shrink-0 px-3">
                            <div className="gallery-item aspect-square">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt={item.alt} src={item.imgSrc} />
                                <div className="absolute inset-0 bg-deep-brown/40 opacity-0 hover:opacity-100 transition-opacity flex items-end p-6 backdrop-blur-[2px] pointer-events-none">
                                    <p className="text-white font-bold text-sm tracking-wide">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
