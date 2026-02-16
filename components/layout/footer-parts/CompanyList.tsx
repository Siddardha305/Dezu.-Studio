"use client";

import Link from "next/link";

export function CompanyList() {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-600 font-medium">
                <li><Link href="#" className="hover:text-black">About us</Link></li>
                <li><Link href="#" className="hover:text-black">Work</Link></li>
                <li><Link href="#" className="hover:text-black">Hire a team</Link></li>
                <li><Link href="#" className="hover:text-black">Contact us</Link></li>
                <li><Link href="#" className="hover:text-black">Dezu</Link></li>
            </ul>
        </div>
    );
}
