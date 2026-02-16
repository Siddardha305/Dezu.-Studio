"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WiggleChar = ({ char, progress, index }: { char: string; progress: any; index: number }) => {
    // Generate a pseudo-random stagger based on index to make it look organic
    const factor = index % 2 === 0 ? 1 : -1;

    // Intense Wiggle (Rotate)
    // No Y-axis wave, just rotation as requested before the last change
    const rotate = useTransform(
        progress,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        [0, 15 * factor, -15 * factor, 10 * factor, -10 * factor, 0]
    );

    return (
        <motion.span style={{ rotate, display: "inline-block" }}>
            {char === " " ? "\u00A0" : char}
        </motion.span>
    );
};

export function Hero7() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Move from Right (100%) to fully Left (-100%)
    // Removed the "Set at Center" logic, restoring the full traverse
    const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

    const text1 = "So, are you ready to ";
    const text2 = "Start?";

    return (
        <section
            ref={containerRef}
            className="relative h-[300vh] bg-[#16002c]"
        >
            <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="whitespace-nowrap flex"
                >
                    <h2 className="text-[10vw] md:text-[8vw] font-black uppercase text-white leading-none tracking-tighter flex">
                        {text1.split("").map((char, i) => (
                            <WiggleChar key={`1-${i}`} char={char} progress={scrollYProgress} index={i} />
                        ))}
                        <span className="text-[#a3ff12] flex ml-4">
                            {text2.split("").map((char, i) => (
                                <WiggleChar key={`2-${i}`} char={char} progress={scrollYProgress} index={i + text1.length} />
                            ))}
                        </span>
                    </h2>
                </motion.div>
            </div>
        </section>
    );
}
