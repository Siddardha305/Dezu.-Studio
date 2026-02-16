"use client";

import { motion, MotionValue } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ShowcaseTextProps {
    opacity: MotionValue<number>;
    x: MotionValue<string>;
}

export function ShowcaseText({ opacity, x }: ShowcaseTextProps) {
    return (
        <motion.div
            style={{ opacity, x }}
            className="absolute right-0 top-0 h-full w-[55%] flex flex-col justify-center p-8 md:p-16 z-[100]"
        >
            <div className="max-w-xl">
                {/* Tagline */}
                <div className="mb-6 flex items-center gap-3 text-sm md:text-base text-[#a3ff12] font-mono tracking-widest uppercase font-bold">
                    <span className="inline-block w-2 h-2 bg-[#a3ff12] rounded-full animate-pulse" />
                    <span>Next Gen Experience</span>
                </div>

                {/* Headline - Using SectionHeading for consistency */}
                <div className="mb-8 text-left">
                    <SectionHeading
                        title="Design That"
                        accent="Moves People"
                        stack
                        className="text-left md:text-7xl lg:text-8xl"
                    />
                </div>

                <p className="text-lg md:text-xl text-white leading-relaxed font-sans">
                    Static sites are history. We build immersive, motion-first digital experiences that capture attention and drive real engagement.
                </p>
            </div>
        </motion.div>
    );
}
