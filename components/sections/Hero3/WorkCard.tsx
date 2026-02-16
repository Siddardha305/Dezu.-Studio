"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface WorkCardProps {
    item: {
        id: number;
        title: string;
        category: string;
        year: string;
        image: string;
        width?: string;
        className?: string;
    };
    style?: React.CSSProperties;
}

export function WorkCard({ item, style }: WorkCardProps) {
    return (
        <motion.div
            className={item.className || "relative w-full h-64"}
            style={style}
            whileHover={{ scale: 1.05, zIndex: 50 }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative w-full h-full overflow-hidden rounded-2xl group cursor-pointer">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">{item.category}</span>
                        <span className="text-gray-400">{item.year}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
