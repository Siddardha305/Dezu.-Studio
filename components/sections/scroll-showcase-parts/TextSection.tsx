"use client";

import { motion, MotionValue } from "framer-motion";

interface TextSectionProps {
    opacity: MotionValue<number>;
    x: MotionValue<number>;
}

export function TextSection({ opacity, x }: TextSectionProps) {
    return (
        <motion.div
            style={{ opacity, x }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] flex flex-col justify-center pl-8 pr-4 z-20"
        >
            <h2 className="mb-6 text-4xl font-bold uppercase leading-tight text-white md:text-6xl">
                Strategies that <span className="text-[#a3ff12]">Scale</span>
            </h2>
            <p className="text-lg text-gray-400 md:text-xl">
                We don't just design visuals; we craft ecosystems. From brand identity to digital products, we ensure every touchpoint tells your story with impact and precision.
            </p>
        </motion.div>
    );
}
