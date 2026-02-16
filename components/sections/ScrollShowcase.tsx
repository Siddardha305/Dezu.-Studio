"use client";

import { useRef } from "react";
import { ShowcaseVideo } from "./scroll-showcase-parts/ShowcaseVideo";
import { ShowcaseText } from "./scroll-showcase-parts/ShowcaseText";
import { useShowcaseAnimations } from "./scroll-showcase-parts/useShowcaseAnimations";

export function ScrollShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { width, height, borderRadius, x, y, textOpacity, textX } = useShowcaseAnimations(containerRef);

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-[#1a0b2e]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#1a0b2e]">

                {/* 1. Video Box Component */}
                <ShowcaseVideo
                    width={width}
                    height={height}
                    borderRadius={borderRadius}
                    x={x}
                    y={y}
                />

                {/* 2. Text Component */}
                <ShowcaseText
                    opacity={textOpacity}
                    x={textX}
                />

            </div>
        </section>
    );
}
