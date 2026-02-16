"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function SocialLinks() {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Use full links</h3>
            <div className="flex gap-4">
                <Link href="#" className="rounded-full bg-[#200e31] p-2 text-white transition-transform hover:scale-110">
                    <Linkedin size={20} />
                </Link>
                <Link href="#" className="rounded-full bg-[#200e31] p-2 text-white transition-transform hover:scale-110">
                    <Facebook size={20} />
                </Link>
                <Link href="#" className="rounded-full bg-[#200e31] p-2 text-white transition-transform hover:scale-110">
                    <Instagram size={20} />
                </Link>
            </div>
        </div>
    );
}
