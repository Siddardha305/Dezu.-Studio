"use client";

import { motion, MotionValue } from "framer-motion";

interface ShowcaseVideoProps {
    width: MotionValue<string>;
    height: MotionValue<string>;
    borderRadius: MotionValue<string>;
    x: MotionValue<string>;
    y: MotionValue<string>;
}

export function ShowcaseVideo({ width, height, borderRadius, x, y }: ShowcaseVideoProps) {
    return (
        <motion.div
            style={{ width, height, borderRadius, x, y }}
            className="absolute z-10 overflow-hidden shadow-2xl bg-black"
        >
            <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
                alt="Scrolling Showcase"
                className="h-full w-full object-cover"
            />
            {/* Dark overlay inside video */}
            <div className="absolute inset-0 bg-black/20" />
        </motion.div>
    );
}
