"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Mock Data for Services
const services = [
    {
        id: 1,
        title: "RESEARCH & DISCOVERY",
        subItems: [
            "Competitor & Market Analysis",
            "Usability & Accessibility Review",
            "User Interviews & Surveys"
        ],
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "BRANDING & CREATIVE",
        subItems: [
            "Brand Strategy",
            "Logo & Identity Design",
            "Marketing Materials",
            "Visual Guidelines"
        ],
        image: "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "DESIGNING USER EXPERIENCE",
        subItems: [
            "Wireframing & Prototyping",
            "Information Architecture",
            "User Flow & Journeys",
            "Interaction Design"
        ],
        image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "USER INTERFACE DESIGN",
        subItems: [
            "Visual Design",
            "Design Systems",
            "Iconography & Illustration",
            "Motion Design"
        ],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "DEVELOPMENT",
        subItems: [
            "Frontend Development (React/Next.js)",
            "Backend Integration",
            "CMS Implementation",
            "Performance Optimization"
        ],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop"
    },
];

export function Hero4() {
    const [openId, setOpenId] = useState<number | null>(1); // Default open first item

    const toggleService = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="relative w-full bg-[#16002c] py-24 md:py-32 overflow-hidden">
            {/* Background Gradient Spot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

            <Container>
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="mb-6 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#a3ff12]" />
                        <span className="text-sm font-bold tracking-widest text-[#a3ff12] uppercase">
                            Our Services
                        </span>
                    </div>
                </div>

                {/* Main Heading Text - Sticky/Visible */}
                <div className="mb-20 text-center">
                    <h2 className="max-w-4xl mx-auto text-4xl font-black uppercase leading-[0.9] text-white md:text-6xl lg:text-7xl">
                        CREATING IMPACT THROUGH <br className="hidden md:block" />
                        CONSISTENT COLLABORATION
                    </h2>
                </div>

                {/* Accordion List */}
                <div className="flex flex-col">
                    {services.map((service) => {
                        const isOpen = openId === service.id;

                        return (
                            <div
                                key={service.id}
                                className="last:border-0"
                            >
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleService(service.id)}
                                    className="flex w-full items-center justify-between py-8 text-left transition-colors group px-2"
                                >
                                    <span className="text-2xl md:text-4xl font-bold uppercase text-[#a3ff12]">
                                        {service.title}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-[#a3ff12]" />
                                    </motion.div>
                                </button>

                                {/* Accordion Content */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-12 pt-4 px-2">
                                                <div className="flex flex-col gap-10">

                                                    {/* Sub Items List - Horizontal Row */}
                                                    <div className="w-full overflow-x-auto">
                                                        <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 min-w-max">
                                                            {service.subItems.map((item, idx) => (
                                                                <li key={idx} className="flex items-center">
                                                                    <span className="text-lg md:text-xl text-white font-medium whitespace-nowrap">
                                                                        {item}
                                                                    </span>
                                                                    {/* Separator Line (not for last item) */}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Image - Full Width */}
                                                    <div className="w-full aspect-[2/1] md:aspect-[2.5/1] rounded-3xl overflow-hidden bg-gray-800 shadow-2xl">
                                                        <img
                                                            src={service.image}
                                                            alt={service.title}
                                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
