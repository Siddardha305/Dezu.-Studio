"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MouseImageTrail } from "@/components/ui/MouseImageTrail";

const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548516173-3db52219d30d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1670272504528-790c24957dda?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?q=80&w=1200&auto=format&fit=crop",
];

export function Hero() {
    return (
        <MouseImageTrail images={HERO_IMAGES} renderImageBuffer={50} rotationRange={20}>
            <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden pt-20 pb-32">
                {/* Background is handled by global CSS body color */}

                <Container className="relative z-10 flex flex-col items-center text-center">

                    <div className="relative mt-12 flex w-full max-w-screen-xl flex-col items-center">
                        <SectionHeading
                            title="A Full-Cycle Design Partner"
                            accent="For Companies That Win"
                            noAnimation // Disabled by user request
                        // Note: Hero originally had both white. 
                        // Using accent prop will make the second line GREEN.
                        // This matches the "standard" requested. 
                        />

                        {/* Cursor and Since tag positioned relative to the text */}
                        {/* Positioned to the right of the text "WIN" */}
                        <div className="absolute left-[58%] top-[85%] hidden md:block rotate-[-10deg] lg:left-[60%] xl:left-[61%]">
                            <div className="flex flex-col items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1 text-[#a3ff12]">
                                    <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="font-mono text-base font-bold text-[#a3ff12]">@Since~2021</span>
                            </div>
                        </div>

                        {/* Mobile version of tag */}
                        <div className="mt-6 flex items-center gap-2 md:hidden">
                            <span className="font-mono text-lg font-bold text-[#a3ff12]">@Since~2021</span>
                        </div>
                    </div>

                    {/* Double Down Arrow - Scrollable with Hero */}
                    <div className="mt-38 animate-bounce">
                        <svg width="48" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#a3ff12] animate-bounce">
                            <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>



                </Container>
            </section>
        </MouseImageTrail>
    );
}
