"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WorkItem {
    id: number;
    title: string;
    category: string;
    year: string;
    image: string;
    className?: string;
}

interface CardProps {
    item: WorkItem;
    style?: any;
    className?: string;
}

const CARD_DIMENSIONS = {
    width: "90%",    // Manual Width (Medium Card)
    height: "15rem",  // Manual Image Height (Medium Card)
};

export function MediumCard({ item, style, className }: CardProps) {
    return (
        <motion.div
            style={{
                ...style,
                width: CARD_DIMENSIONS.width
            }}
            // Full width, no mx-auto
            className={cn(
                "relative overflow-hidden rounded-none shadow-2xl transition-all duration-500 hover:z-30 hover:scale-105",
                className
            )}
        >
            <div className="relative flex flex-col bg-[#25103f] rounded-none overflow-hidden h-auto group shadow-lg hover:shadow-2xl transition-shadow duration-500">
                {/* Image Section - Manually Controlled Aspect Ratio */}
                <div
                    className="relative w-full overflow-hidden bg-gray-100"
                    style={{ height: CARD_DIMENSIONS.height }}
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>

                {/* Solid Footer Section */}
                <div className="flex justify-between items-start p-6 bg-[#25103f]">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold text-[#a3ff12] leading-none tracking-tight group-hover:text-white transition-colors duration-300">
                            {item.title}
                        </h3>
                        <p className="text-sm text-white/70 font-light">{item.category}</p>
                    </div>
                    <span className="text-sm font-medium text-white/90">{item.year}</span>
                </div>
            </div>
        </motion.div>
    );
}
