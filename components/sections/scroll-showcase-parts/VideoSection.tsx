"use client";

import { motion, MotionValue } from "framer-motion";

interface VideoSectionProps {
    width: MotionValue<string>;
    x: MotionValue<string>;
}

export function VideoSection({ width, x }: VideoSectionProps) {
    return (
        <motion.div
            style={{ width, x }}
            className="relative aspect-video h-auto overflow-hidden rounded-2xl shadow-2xl z-10"
        >
            {/* Placeholder for Video/Image */}
            <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
                alt="Showcase"
                className="h-full w-full object-cover"
            />

            {/* Overlay to darken/tint if needed */}
            <div className="absolute inset-0 bg-black/10" />
        </motion.div>
    );
}
