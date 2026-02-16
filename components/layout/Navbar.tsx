"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Navbar() {
    return (
        <header className="absolute top-0 z-50 w-full bg-transparent pt-6">
            <Container>
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex flex-col items-start leading-none group">
                        <span className="text-5xl font-extrabold tracking-tighter text-white group-hover:opacity-80 transition-opacity">Dezu.</span>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/70 ml-1">Studio</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Button className="h-12 rounded-lg bg-[#a3ff12] px-8 text-sm font-extrabold uppercase text-black hover:bg-[#a3ff12]/90 hover:scale-105 transition-all">
                            LET&apos;S TALK
                            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}
