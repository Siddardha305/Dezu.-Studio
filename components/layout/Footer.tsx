"use client";

import { Container } from "@/components/layout/Container";
import { IntentionalHeader } from "./footer-parts/IntentionalHeader";
import { ServicesList } from "./footer-parts/ServicesList";
import { CompanyList } from "./footer-parts/CompanyList";
import { SocialLinks } from "./footer-parts/SocialLinks";
import { DezuStudio } from "./footer-parts/DezuStudio";

export function Footer() {
    return (
        <footer className="w-full bg-white pt-20 pb-0 text-black">
            <Container>
                {/* Top Section: Header & Links */}
                <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">

                    {/* Left: Branding & CTA */}
                    <IntentionalHeader />

                    {/* Right: Navigation Links */}
                    <div className="flex flex-wrap gap-12 md:gap-24">
                        <ServicesList />
                        <CompanyList />
                        <SocialLinks />
                    </div>
                </div>


            </Container>

            {/* Bottom Section: Massive Brand Text - Full Width */}
            <DezuStudio />
        </footer >
    );
}
