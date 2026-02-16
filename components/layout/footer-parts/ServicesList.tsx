"use client";

import Link from "next/link";

export function ServicesList() {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-600 font-medium">
                <li><Link href="#" className="hover:text-black">UIUX Design</Link></li>
                <li><Link href="#" className="hover:text-black">Branding</Link></li>
                <li><Link href="#" className="hover:text-black">Product Design</Link></li>
                <li><Link href="#" className="hover:text-black">Web development</Link></li>
                <li><Link href="#" className="hover:text-black">Web apps</Link></li>
                <li><Link href="#" className="hover:text-black">Marketing</Link></li>
            </ul>
        </div>
    );
}
