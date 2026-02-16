"use client";

import { motion, MotionValue } from "framer-motion";

interface ShowcaseTextProps {
    opacity: MotionValue<number>;
    x: MotionValue<number>;
}

export function ShowcaseText({ opacity, x }: ShowcaseTextProps) {
    return (
        <motion.div
            style={{ opacity, x }}
            className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center p-12 pl-4 z-0"
        >
            <div className="max-w-2xl text-left">
                <p className="text-3xl md:text-4xl font-bold leading-tight uppercase tracking-tight">
                    <span className="text-white">
                        DESIGN MOVED FROM PIXELS TO STRATEGY AND SPEED. TODAY’S COMPANIES NEED STRATEGIC FUNCTION, DYNAMIC COMMUNICATION AND CONNECTION.
                    </span>
                    <br />
                    <span className="text-[#a3ff12] mt-4 block">
                        WE FUSE STRATEGY, DESIGN, AND STORYTELLING TO BUILD BRANDS AND DIGITAL PRODUCTS BUILT FOR GROWTH.
                    </span>
                </p>
            </div>
        </motion.div>
    );
}
