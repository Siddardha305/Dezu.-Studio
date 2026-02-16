"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title?: string; // Standard White Text
    accent?: string; // Highlighted Green Text
    reverse?: boolean; // If true, Accent appears before Title
    stack?: boolean; // If true, forces a line break between them. Default: true for consistency.
    noAnimation?: boolean; // If true, disables the reveal animation
    className?: string;
}

// Animation variants for text reveal
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const wordVariants = {
    hidden: { y: "100%" },
    visible: {
        y: "0%",
        transition: {
            duration: 0.8,
            ease: [0.2, 0.65, 0.3, 0.9],
        },
    },
};

function SplitText({ text, className, noAnimation }: { text: string; className?: string; noAnimation?: boolean }) {
    if (!text) return null;
    const words = text.split(" ");
    return (
        <span className={cn("inline-block overflow-hidden", className)}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-top mr-[0.25em] last:mr-0">
                    <motion.span
                        variants={!noAnimation ? wordVariants : undefined}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

export function SectionHeading({
    title,
    accent,
    reverse = false,
    stack = true,
    noAnimation = false,
    className,
}: SectionHeadingProps) {
    const first = reverse ? accent : title;
    const second = reverse ? title : accent;

    const firstColor = reverse ? "text-[#a3ff12]" : "text-white";
    const secondColor = reverse ? "text-white" : "text-[#a3ff12]";

    return (
        <motion.h2
            variants={!noAnimation ? containerVariants : undefined}
            initial={!noAnimation ? "hidden" : undefined}
            whileInView={!noAnimation ? "visible" : undefined}
            viewport={{ once: true, margin: "-100px" }}
            className={cn(
                "font-black uppercase leading-[0.9] tracking-tighter text-center",
                "text-4xl md:text-6xl lg:text-7xl", // Standard Size
                className
            )}
        >
            {first && (
                <span className={cn("block", firstColor)}>
                    <SplitText text={first} noAnimation={noAnimation} />
                </span>
            )}

            {second && (
                <span className={cn(stack ? "block" : "inline-block ml-4", secondColor)}>
                    <SplitText text={second} noAnimation={noAnimation} />
                </span>
            )}
        </motion.h2>
    );
}
