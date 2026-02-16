"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

export function useHero2Animations(containerRef: RefObject<HTMLElement>) {
    // 1. Entry Progress: Tracks the section entering the viewport (Bottom -> Top)
    const { scrollYProgress: entryProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"],
    });

    // 2. Pinned Progress: Tracks the scroll *within* the sticky section (While pinned)
    const { scrollYProgress: pinnedProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // --- Transform Logic ---
    // SIMULTANEOUS ANIMATION
    // Range: 0.2 -> 0.7 for all properties.

    // Width: 100% -> 25% (0.2 -> 0.7)
    const width = useTransform(
        [entryProgress, pinnedProgress],
        ([e, p]) => {
            if (e < 1) {
                return `${70 + e * 30}%`;
            } else {
                if (p < 0.2) return "100%";
                if (p > 0.7) return "25%";
                // Linear interpolation 0.2 -> 0.7
                const progress = (p - 0.2) / 0.5;
                return `${100 - progress * 75}%`;
            }
        }
    );

    // Height: 100vh -> 35vh (0.2 -> 0.7)
    const height = useTransform(
        [entryProgress, pinnedProgress],
        ([e, p]) => {
            if (e < 1) {
                return `${50 + e * 50}vh`;
            } else {
                if (p < 0.2) return "100vh";
                if (p > 0.7) return "35vh";
                const progress = (p - 0.2) / 0.5;
                return `${100 - progress * 65}vh`;
            }
        }
    );

    // Border Radius: 0rem -> 2rem (0.2 -> 0.7)
    const borderRadius = useTransform(
        [entryProgress, pinnedProgress],
        ([e, p]) => {
            if (e < 1) {
                return `${2 * (1 - e)}rem`;
            } else {
                if (p < 0.2) return "0rem";
                if (p > 0.7) return "2rem";
                const progress = (p - 0.2) / 0.5;
                return `${progress * 2}rem`;
            }
        }
    );

    // X Position: 0vw -> -25vw (Left Center)
    const x = useTransform(
        [entryProgress, pinnedProgress],
        ([e, p]) => {
            if (e < 1) return "0vw";
            else {
                if (p < 0.2) return "0vw";
                if (p > 0.7) return "-25vw"; // Centers in the left 50%
                const progress = (p - 0.2) / 0.5;
                return `${progress * -25}vw`;
            }
        }
    );

    // Y Position: 0vh -> 0vh (Stays centered)
    const y = useTransform(
        [entryProgress, pinnedProgress],
        ([e, p]) => {
            return "0vh";
        }
    );

    // Text Animations:
    // Text Animations:
    // Appear immediately with video movement: 0.2 -> 0.4 (Faster)
    const textOpacity = useTransform(pinnedProgress, [0.2, 0.4, 0.9, 1], [0, 1, 1, 0]);

    // Slide in logic
    const textX = useTransform(pinnedProgress, [0.2, 0.4], ["50px", "0px"]);

    return {
        width,
        height,
        borderRadius,
        x,
        y,
        textOpacity,
        textX
    };
}
