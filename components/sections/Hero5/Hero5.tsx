"use client";

import { Container } from "@/components/layout/Container";
import { EngagementContent } from "./EngagementContent";
import { EngagementImage } from "./EngagementImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sparkles } from "lucide-react";

export function Hero5() {
    return (
        <section className="relative w-full bg-[#1a0b2e] py-24 md:py-32">
            <Container>
                {/* Section Header */}
                {/* Section Header */}
                <div className="mb-16 md:mb-24">
                    <div className="mb-4 flex items-center gap-2 justify-center md:justify-start">
                        <Sparkles className="w-5 h-5 text-[#a3ff12]" />
                        <span className="text-sm font-bold tracking-widest text-white/60 uppercase">
                            Our Services
                        </span>
                    </div>
                    <SectionHeading
                        title="Flexible by Design"
                        accent="Engagement Models"
                        reverse
                        className="text-left"
                    />
                </div>

                {/* Content Card - Split Layout */}
                <div className="overflow-hidden rounded-3xl border border-[#a3ff12]/30 bg-[#0f0418] shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left Component */}
                        <EngagementContent />

                        {/* Right Component */}
                        <EngagementImage />
                    </div>
                </div>
            </Container>
        </section>
    );
}
