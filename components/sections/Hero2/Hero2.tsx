"use client";

import { useRef } from "react";
import { MotionValue } from "framer-motion";
import { ShowcaseVideo } from "./components/ShowcaseVideo";
import { ShowcaseText } from "./components/ShowcaseText";
import { useHero2Animations } from "./components/useHero2Animations";

export function Hero2() {
    const containerRef = useRef<HTMLElement>(null);
    const { width, height, borderRadius, x, y, textOpacity, textX } = useHero2Animations(containerRef);

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-[#1a0b2e]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#1a0b2e]">

                <ShowcaseVideo
                    width={width}
                    height={height}
                    borderRadius={borderRadius}
                    x={x}
                    y={y}
                />

                <ShowcaseText
                    opacity={textOpacity}
                    x={textX as MotionValue<string | number>}
                />

            </div>
        </section>
    );
}
