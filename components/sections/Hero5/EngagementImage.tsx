"use client";

import { motion } from "framer-motion";

export function EngagementImage() {
    return (
        <div className="relative h-full min-h-[400px] w-full overflow-hidden bg-gray-900">
            <img
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2670&auto=format&fit=crop"
                alt="Engagement Model - Team Working"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0f0418]/80 mix-blend-multiply pointer-events-none" />
        </div>
    );
}
