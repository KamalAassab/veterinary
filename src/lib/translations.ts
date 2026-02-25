export type Language = 'fr' | 'en';

export interface TranslationStructure {
    nav: {
        services: string;
        clinic: string;
        reviews: string;
        contact: string;
        book: string;
        switch_language: string;
    };
    hero: {
        badge: string;
        title_1: string;
        title_2: string;
        subtitle: string;
        cta_book: string;
        stats_patients: string;
        stats_specialists: string;
        stats_emergency: string;
        rating_text: string;
        happy_clients_count: string;
        happy_clients_label: string;
    };
    services: {
        badge: string;
        title_1: string;
        title_2: string;
        subtitle: string;
        general: { title: string; desc: string; };
        diagnostics: { title: string; desc: string; };
        surgery: { title: string; desc: string; };
        grooming: { title: string; desc: string; };
        vaccinations: { title: string; desc: string; };
        pharmacy: { title: string; desc: string; };
    };
    testimonials: {
        title: string;
        title_highlight: string;
        subtitle: string;
    };
    contact: {
        badge: string;
        title_1: string;
        title_2: string;
        visit: { title: string; btn: string; };
        call: { title: string; desc: string; };
        hours: { title: string; desc: string; sub: string; };
        form: {
            name: string;
            name_label: string;
            name_placeholder: string;
            phone_label: string;
            phone_placeholder: string;
            animal_label: string;
            animal_placeholder: string;
            service_label: string;
            service_placeholder: string;
            services_options: {
                general: string;
                diagnostics: string;
                surgery: string;
                grooming: string;
                vaccinations: string;
                pharmacy: string;
                other: string;
            };
            email_label: string;
            email_placeholder: string;
            msg: string;
            msg_label: string;
            msg_placeholder: string;
            btn: string;
            whatsapp_body: string;
        };
        map: { btn: string; };
        address: { line1: string; line2: string; };
    };
    footer: {
        bio: string;
        services_title: string;
        links_title: string;
        contact_title: string;
        rights: string;
        privacy: string;
        designed_by: string;
        by: string;
        scroll_top_aria: string;
    };
    patients: { title: string; dogs: string; cats: string; };
    gallery: {
        badge: string;
        title_1: string;
        title_2: string;
        subtitle: string;
    };
}

export const translations: Record<Language, TranslationStructure> = {
    fr: {
        nav: {
            services: "Services",
            clinic: "Clinique",
            reviews: "Avis",
            contact: "Contact",
            book: "Prendre RDV",
            switch_language: "EN"
        },
        hero: {
            badge: "L'Excellence Vétérinaire",
            title_1: "Des Soins",
            title_2: "D'Exception.",
            subtitle: "Cabinet vétérinaire de référence à El Jadida dirigé par Dr. Salma Kandil. Une approche personnalisée pour le bien-être de vos compagnons.",
            cta_book: "Prendre Rendez-vous",
            stats_patients: "Patients Soignés",
            stats_specialists: "Expertise Médicale",
            stats_emergency: "Équipement de Pointe",
            rating_text: "Excellence Approuvée",
            happy_clients_count: "2,500+",
            happy_clients_label: "Clients Satisfaits"
        },
        services: {
            badge: "NOS EXPERTISES",
            title_1: "Des Soins Complets",
            title_2: "Sur Mesure.",
            subtitle: "Découvrez notre gamme de services vétérinaires conçus pour assurer la santé optimale de vos animaux.",
            general: { title: "Médecine Générale", desc: "Consultations approfondies, bilans de santé et soins préventifs personnalisés." },
            diagnostics: { title: "Diagnostics Avancés", desc: "Technologie de pointe pour des diagnostics précis et rapides sur place." },
            surgery: { title: "Chirurgie", desc: "Interventions chirurgicales réalisées avec les plus hauts standards de sécurité." },
            grooming: { title: "Dermatologie", desc: "Prise en charge spécialisée des affections cutanées et soins hygiéniques." },
            vaccinations: { title: "Vaccination", desc: "Protocoles immunitaires adaptés au mode de vie de chaque animal." },
            pharmacy: { title: "Pharmacie", desc: "Accès immédiat aux traitements prescrits et conseils nutritionnels." },
        },
        testimonials: {
            title: "Ce Que Disent",
            title_highlight: "Nos Clients",
            subtitle: "Découvrez les retours d'expérience de ceux qui nous font confiance.",
        },
        contact: {
            badge: "VISITEZ-NOUS",
            title_1: "Nous Sommes à",
            title_2: "Votre Écoute.",
            visit: { title: "Notre Cabinet", btn: "Itinéraire" },
            call: { title: "Téléphone", desc: "+212 6 89 01 83 05" },
            hours: { title: "Horaires", desc: "Lun-Ven: 9h-13h | 15h-19h", sub: "Sam: 9h-14h | Dim: Fermé" },
            form: {
                name: "Nom",
                name_label: "Nom Complet",
                name_placeholder: "Votre nom",
                phone_label: "Téléphone",
                phone_placeholder: "06 00 00 00 00",
                animal_label: "Nom de l'animal",
                animal_placeholder: "Ex: Milo",
                service_label: "Raison de la consultation",
                service_placeholder: "Sélectionnez un motif",
                services_options: {
                    general: "Consultation Générale",
                    diagnostics: "Examen / Diagnostic",
                    surgery: "Chirurgie",
                    grooming: "Toilettage / Soins",
                    vaccinations: "Vaccination",
                    pharmacy: "Pharmacie / Alimentation",
                    other: "Autre demande"
                },
                email_label: "Email",
                email_placeholder: "vous@email.com",
                msg: "Message",
                msg_label: "Précisions",
                msg_placeholder: "Détaillez brièvement votre besoin...",
                btn: "Envoyer sur WhatsApp",
                whatsapp_body: "Bonjour Dr. Salma Khandil,%0A%0AJe souhaite prendre rendez-vous/avoir des renseignements :%0A%0A👤 Nom: {name}%0A📞 Téléphone: {phone}%0A🐾 Animal: {animal}%0A⚕️ Service: {service}%0A%0A📝 Message: %0A{message}"
            },
            map: {
                btn: "Ouvrir dans Google Maps"
            },
            address: {
                line1: "Villa N°45, Avenue Ibn Badis",
                line2: "À côté de Marjane Market (Acima), El Jadida"
            }
        },
        footer: {
            bio: "Cabinet vétérinaire d'excellence dédié à la santé et au bonheur de vos compagnons. Une expertise pointue et bienveillante signée Dr. Salma Kandil.",
            services_title: "Cabinet",
            links_title: "Navigation",
            contact_title: "Coordonnées",
            rights: "Tous droits réservés.",
            privacy: "Politique de confidentialité",
            designed_by: "Design par",
            by: "",
            scroll_top_aria: "Retour en haut"
        },
        patients: {
            title: "Nos Petits Protégés",
            dogs: "Chiens",
            cats: "Chats",
        },
        gallery: {
            badge: "L'ENVIRONNEMENT",
            title_1: "Notre",
            title_2: "Clinique.",
            subtitle: "Un espace moderne conçu pour le confort et la sérénité de vos animaux lors de leur passage."
        }
    },
    en: {
        nav: {
            services: "Services",
            clinic: "Clinic",
            reviews: "Reviews",
            contact: "Contact",
            book: "Book Visit",
            switch_language: "FR"
        },
        hero: {
            badge: "Veterinary Excellence",
            title_1: "Exceptional",
            title_2: "Care.",
            subtitle: "A premier veterinary clinic in El Jadida led by Dr. Salma Kandil. A personalized approach to your pet's well-being.",
            cta_book: "Book an Appointment",
            stats_patients: "Treated Patients",
            stats_specialists: "Medical Expertise",
            stats_emergency: "State-of-the-Art",
            rating_text: "Approved Excellence",
            happy_clients_count: "2,500+",
            happy_clients_label: "Happy Clients"
        },
        services: {
            badge: "OUR EXPERTISE",
            title_1: "Comprehensive",
            title_2: "Tailored Care.",
            subtitle: "Discover our range of veterinary services designed to ensure the optimal health of your animals.",
            general: { title: "General Medicine", desc: "Thorough consultations, health check-ups, and personalized preventative care." },
            diagnostics: { title: "Advanced Diagnostics", desc: "Cutting-edge technology for precise and rapid on-site diagnostics." },
            surgery: { title: "Surgery", desc: "Surgical interventions performed with the highest safety standards." },
            grooming: { title: "Dermatology", desc: "Specialized care for skin conditions and hygienic treatments." },
            vaccinations: { title: "Vaccination", desc: "Immune protocols adapted to each animal's lifestyle." },
            pharmacy: { title: "Pharmacy", desc: "Immediate access to prescribed treatments and nutritional advice." },
        },
        testimonials: {
            title: "What Our",
            title_highlight: "Clients Say",
            subtitle: "Read the feedback from those who trust us with their companions.",
        },
        contact: {
            badge: "VISIT US",
            title_1: "We Are Here",
            title_2: "For You.",
            visit: { title: "Our Clinic", btn: "Get Directions" },
            call: { title: "Phone", desc: "+212 6 89 01 83 05" },
            hours: { title: "Hours", desc: "Mon-Fri: 9am-1pm | 3pm-7pm", sub: "Sat: 9am-2pm | Sun: Closed" },
            form: {
                name: "Name",
                name_label: "Full Name",
                name_placeholder: "Your name",
                phone_label: "Phone",
                phone_placeholder: "06 00 00 00 00",
                animal_label: "Pet's Name",
                animal_placeholder: "E.g. Milo",
                service_label: "Reason for visit",
                service_placeholder: "Select a reason",
                services_options: {
                    general: "General Consultation",
                    diagnostics: "Examination / Diagnostics",
                    surgery: "Surgery",
                    grooming: "Grooming / Care",
                    vaccinations: "Vaccination",
                    pharmacy: "Pharmacy / Diet",
                    other: "Other Inquiry"
                },
                email_label: "Email",
                email_placeholder: "you@email.com",
                msg: "Message",
                msg_label: "Details",
                msg_placeholder: "Briefly detail your needs...",
                btn: "Send via WhatsApp",
                whatsapp_body: "Hello Dr. Salma Kandil,%0A%0AI would like to book an appointment/get information:%0A%0A👤 Name: {name}%0A📞 Phone: {phone}%0A🐾 Pet: {animal}%0A⚕️ Service: {service}%0A%0A📝 Message: %0A{message}"
            },
            map: {
                btn: "Open in Google Maps"
            },
            address: {
                line1: "Villa N°45, Avenue Ibn Badis",
                line2: "Next to Marjane Market (Acima), El Jadida"
            }
        },
        footer: {
            bio: "A premier veterinary clinic dedicated to the health and happiness of your companions. Advanced and compassionate expertise by Dr. Salma Kandil.",
            services_title: "Clinic",
            links_title: "Navigation",
            contact_title: "Contact Info",
            rights: "All rights reserved.",
            privacy: "Privacy Policy",
            designed_by: "Designed by",
            by: "",
            scroll_top_aria: "Back to top"
        },
        patients: {
            title: "Our Furry Friends",
            dogs: "Dogs",
            cats: "Cats",
        },
        gallery: {
            badge: "OUR FACILITY",
            title_1: "Our",
            title_2: "Clinic.",
            subtitle: "A modern space designed for the comfort and serenity of your pets during their visit."
        }
    }
};
