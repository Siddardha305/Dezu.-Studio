"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

export function useShowcaseAnimations(containerRef: RefObject<HTMLElement>) {
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

    // X Position: 0vw -> -36vw (0.2 -> 0.7)
    // Switched to 'vw' for precise control relative to screen width.
    // Initial Center: 50vw
    // Target Move: -36vw -> New Center: 14vw
    // Video Width: 25vw (Half: 12.5vw)
    // Left Gap: 14vw - 12.5vw = 1.5vw (Very small gap, almost flush left).
    const x = useTransform(
        [entryProgress, pinnedProgress],
        ([e, p]) => {
            if (e < 1) return "0vw";
            else {
                if (p < 0.2) return "0vw";
                if (p > 0.7) return "-36vw";
                const progress = (p - 0.2) / 0.5;
                return `${progress * -36}vw`;
            }
        }
    );

    // Y Position: 0vh -> 25vh (0.2 -> 0.7)
    const y = useTransform(
        [entryProgress, pinnedProgress],
        ([e, p]) => {
            if (e < 1) return "0vh";
            else {
                if (p < 0.2) return "0vh";
                if (p > 0.7) return "25vh";
                const progress = (p - 0.2) / 0.5;
                return `${progress * 25}vh`;
            }
        }
    );

    // Text Animations:
    // Appear towards the end of the move (0.75 -> 0.95)
    // Delayed so it doesn't overlap or distract during the move.
    const textOpacity = useTransform(pinnedProgress, [0.75, 0.95], [0, 1]);
    const textX = useTransform(pinnedProgress, [0.75, 0.95], [100, 0]);

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
