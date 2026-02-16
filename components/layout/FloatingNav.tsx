"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingNav() {
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const navItems = ["Work", "Get Your Own Team", "About", "Dezu"];

    return (
        <div className="fixed bottom-10 left-1/2 flex -translate-x-1/2 z-[999] flex-col items-center gap-4 pointer-events-auto">
            <div className="flex items-center gap-1 rounded-xl border border-[#a3ff12]/30 bg-[#2d1b4e] p-2 backdrop-blur-md shadow-2xl">
                {navItems.map((item) => (
                    <button
                        key={item}
                        onClick={() => setActiveTab(item)}
                        className={cn(
                            "rounded-lg px-6 py-2 text-base font-medium transition-all duration-300 whitespace-nowrap",
                            activeTab === item
                                ? "bg-[#a3ff12] text-black font-bold shadow-lg"
                                : "text-white hover:text-[#a3ff12] hover:bg-white/5"
                        )}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
}
