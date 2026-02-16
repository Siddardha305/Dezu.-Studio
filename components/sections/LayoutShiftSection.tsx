"use client";

import { Container } from "@/components/layout/Container";
import { MoveRight } from "lucide-react";

export function LayoutShiftSection() {
    return (
        <section className="relative w-full bg-black py-32">
            <Container className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-24">

                {/* Left Graphic / "Video" Placeholder */}
                <div className="relative shrink-0 w-full lg:w-[400px] aspect-square lg:aspect-[4/3] bg-[#2d1b4e] flex items-stretch">
                    {/* Left side of the graphic - White */}
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <h3 className="text-4xl font-bold uppercase leading-none tracking-tighter text-[#2d1b4e]">
                            Warning!
                            <br />
                            Real-
                            <br />
                            World
                            <br />
                            Usage
                        </h3>
                        {/* Some abstract lines or barcode look could go here if needed */}
                    </div>

                    {/* Right side of the graphic - Purple with Arrow */}
                    <div className="w-[40%] bg-[#2d1b4e] flex items-center justify-center border-l-4 border-white">
                        <MoveRight className="h-24 w-24 text-[#a3ff12] -rotate-45 lg:rotate-0" />
                    </div>
                </div>

                {/* Right Text Content */}
                <div className="flex-1">
                    <div className="mb-4 text-sm font-medium text-gray-500">
                        [ I ] Be the brand they never stop talking about
                    </div>
                    <h2 className="text-3xl font-medium leading-[1.2] text-white md:text-5xl lg:text-6xl">
                        Design on the web isn&apos;t static anymore. Today&apos;s brands need energy, personality and meaning. We bring together strategy, design and storytelling to build digital experiences that grab attention, move fast and make people feel.
                    </h2>
                </div>

            </Container>
        </section>
    );
}
