"use client";

import { Sparkles } from "lucide-react";

export function EngagementContent() {
    return (
        <div className="flex flex-col justify-center h-full p-8 md:p-12 lg:p-16 bg-[#0f0418] border-r border-white/5">
            {/* Tag */}
            <div className="mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#a3ff12]" />
                <span className="text-sm font-bold tracking-widest text-white/60 uppercase">
                    Our Services
                </span>
            </div>

            {/* Title */}
            <h3 className="mb-6 text-3xl font-bold text-[#a3ff12] md:text-4xl uppercase leading-tight">
                One-Time Engagements
            </h3>

            {/* Subtitle */}
            <p className="mb-6 text-xl text-white font-medium">
                For clarity, speed, and decisive momentum.
            </p>

            {/* Description */}
            <p className="mb-10 text-base leading-relaxed text-white/70">
                Ideal when you need sharp thinking, fast alignment, or a strong starting point.
                We step in, diagnose, design, and hand over with precision—no loose ends.
            </p>

            {/* List Section */}
            <div>
                <h4 className="mb-4 text-lg font-bold text-[#a3ff12]">
                    Best for Teams that
                </h4>
                <ul className="space-y-3">
                    {[
                        "Have clear requirements",
                        "Need fresh perspective",
                        "Need clarity and quick strategy"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-white/80">
                            <Sparkles className="w-5 h-5 text-[#a3ff12] shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
