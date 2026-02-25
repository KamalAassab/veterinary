'use client';

export function Hero() {
    return (
        <header className="relative h-screen min-h-[600px] w-full flex items-end md:items-center pb-[10vh] md:pb-0 overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    alt="Cabinet Vétérinaire El Jadida - Dr. Salma Kandil soignant un chat et un chien"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnQTxZn6wGHZO-EFui7BerpCiK6BP28znfZ4tUfrTEBdLLq9K_8UiGAVDFoiHUzqu8hAolPwyYpWjxXILfACnxnNWOfMQUHMjw0b1drezMGZocpB905hzCr_Z3ztk1jqWG-G3jOmNQrupyBhWlCKEF5ci-rEe9giYXwOqDWlJ9lV5RKlD0IILlmfAAfXgMFBqWqqC4vMo354ML9HrtRFzhf5fLrZIwEBur6U1BHvMHI-0nWeZrXTl6LQbj02U1Tz-ckiz7H6i_u4Y"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10">
                <div className="max-w-3xl space-y-8">

                    <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white">
                        Des soins d&apos;exception <br />
                        <span className="text-white">pour vos compagnons</span> <br />
                        à El Jadida.
                    </h1>
                    <p className="hidden md:block text-lg md:text-xl text-white/95 max-w-xl leading-relaxed font-medium drop-shadow-md">
                        Le cabinet vétérinaire du Dr. Salma Kandil à El Jadida offre à vos animaux une vie saine et épanouie grâce à notre expertise passionnée, dans un cadre serein.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button
                            className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:brightness-110 transition-all duration-300 shadow-2xl shadow-primary/40 flex items-center gap-3"
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Réserver un rendez-vous
                            <span className="material-symbols-outlined">calendar_today</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
