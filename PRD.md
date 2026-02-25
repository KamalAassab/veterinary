# Product Requirements Document (PRD): Dr. Ikram Veterinary Clinic

## 1. Project Overview
**Project Name:** Dr. Ikram Veterinary Clinic Web App
**Client:** Dr. Ikram
**Platform:** Web Application (Responsive)
**Tech Stack:** Next.js, React, TypeScript, Framer Motion, Tailwind CSS, Shadcn UI
**Theme:** Veterinary (Nature/Vibrant Colors), Professional, clean, modern.
**Location:** [Map Link](https://maps.app.goo.gl/VzafENCFzg5MoL4z7)
**Contact:** +212672204698
**Opening Hours:** Everyday 9:00 - 19:00

## 2. Objectives
- Professional digital presence for Dr. Ikram.
- Facilitate online appointment reservations.
- Showcase services (Médecine, Chirurgie, Pharmacie, Toilettage, Nutrition, Urgence).
- Target audience: Pet owners (Dogs, Cats, Birds, Horses).

## 3. Design & Aesthetics (Frontend Skills MCP)
- **Visual Style:** "Nature Professional". Vibrant natural colors (Greens, Earth tones, potentially Gold/Teal accents).
- **Typography:** Professional "Cue" font family (or closest high-quality alternative like 'Playfair Display' for headings, 'Inter'/'Outfit' for body).
- **Components:** High-quality cards with hover effects, glassmorphism hints, refined spacing.
- **Motion:** Subtle entrance animations (Framer Motion) for sections, cards, and buttons.
- **Layout:** Responsive, mobile-first.

## 4. Site Structure

### 4.1. Header (Navigation)
- Logo (Dr. Ikram Veterinary Clinic) - Text/Icon combo.
- Links: Home, Services, Gallery, Contact.
- CTA Button: "Book Appointment".
- Mobile Menu (Hamburger).

### 4.2. Hero Section
- **Content:** High-quality background image (pets/clinic).
- **Headline:** Professional & Caring Veterinary Services.
- **Subheadline:** Dedicated care for your dogs, cats, birds, and horses.
- **CTA:** "Book Now" & "Call Us".
- **Visuals:** Vibrant, welcoming.

### 4.3. Services Section
Display as interactive cards with icons/images.
- **Médecine (Medicine):** General checkups, vaccinations.
- **Chirurgie (Surgery):** Professional surgical procedures.
- **Pharmacie Vétérinaire (Pharmacy):** Meds & supplies.
- **Toilettage (Grooming):** Pet spa & cleaning.
- **Nutritions:** Diet plans & food.
- **Urgence (Emergency):** Priority support info.

### 4.4. Gallery Section
- Grid/Masonry layout of clinic facilities, happy pets, and staff.
- Lightbox effect on click.

### 4.5. Opening Hours & Location
- **Hours:** Everyday 9:00 - 19:00.
- **Map:** Embedded Google Map (using provided link).
- **Contact Info:** Phone number (+212672204698), Address.

### 4.6. Footer
- Quick links.
- Social media icons.
- Copyright info.

## 5. Technical Specifications (Vercel React Best Practices)
- **Framework:** Next.js (App Router).
- **Language:** TypeScript.
- **Styling:** Tailwind CSS + Shadcn UI components.
- **State Management:** React Hooks / Context (minimal needed for this scale).
- **Performance:**
    - Use `next/image` for optimized assets.
    - `next/font` for typography.
    - Lazy load heavy components (Maps).
    - Code splitting via Next.js default behavior.
- **SEO:** Metadata implementation for "Vétérinaire casablanca/location", "Dr. Ikram", etc.

## 6. Implementation Plan
1.  **Setup:** Initialize Next.js project with TS, Tailwind, Shadcn.
2.  **Theme:** Configure Tailwind colors/fonts.
3.  **Components:** Build reusable UI (Button, Card, Section).
4.  **Sections:** Implement Hero, Services, Gallery, Contact.
5.  **Functionality:** Reservation form (email/whatsapp link or simple backend?), Map integration.
6.  **Review:** Validate against Vercel best practices (Lighthouse score, performance).

## 7. User Stories
- As a pet owner, I want to see the opening hours so I know when to visit.
- As a user, I want to book an appointment online to avoid waiting.
- As a horse owner, I want to know if you treat horses (Services section).
