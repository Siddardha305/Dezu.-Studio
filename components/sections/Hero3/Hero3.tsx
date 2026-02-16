"use client";

import { SmallCard } from "./SmallCard";
import { MediumCard } from "./MediumCard";
import { BigCard } from "./BigCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Mock Data for Work Items - Structured for 4-column Grid
// Row 1: Small - Big - Medium - Small
// Row 2: Medium - Small - Big - Medium
// Row 3: Small - Big - Small - Medium
// Row 4: Medium - Small

type CardType = "small" | "medium" | "big";

const workItems = [
    // Row 1
    {
        id: 1,
        title: "Ventura Pranas",
        category: "UI/UX, Dev",
        year: "2024",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2670&auto=format&fit=crop",
        type: "small" as CardType,
    },
    {
        id: 2,
        title: "HighCloud",
        category: "Rebranding",
        year: "2023",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        type: "big" as CardType,
    },
    {
        id: 3,
        title: "Qylis",
        category: "Branding",
        year: "2023",
        image: "https://images.unsplash.com/photo-1481487484168-9b9307068539?q=80&w=2670&auto=format&fit=crop",
        type: "medium" as CardType,
    },
    {
        id: 4,
        title: "Lelutis",
        category: "Design",
        year: "2021",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop",
        type: "small" as CardType,
    },

    // Row 2
    {
        id: 5,
        title: "TIE Silicon Valley",
        category: "Rebranding, UI/UX",
        year: "2024",
        image: "https://images.unsplash.com/photo-1590935217281-8f192905cbd9?q=80&w=2670&auto=format&fit=crop",
        type: "medium" as CardType,
    },
    {
        id: 6,
        title: "Mall 360",
        category: "Branding, UI/UX",
        year: "2025",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
        type: "small" as CardType,
    },
    {
        id: 7,
        title: "Naeem Zafar",
        category: "Personal Brand",
        year: "2021",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
        type: "big" as CardType,
    },
    {
        id: 8,
        title: "Mad Box",
        category: "Packaging",
        year: "2022",
        image: "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?q=80&w=2670&auto=format&fit=crop",
        type: "medium" as CardType,
    },

    // Row 3
    {
        id: 9,
        title: "Ecomall",
        category: "UI Design",
        year: "2021",
        image: "https://images.unsplash.com/photo-1523289333742-be1122a73bce?q=80&w=2670&auto=format&fit=crop",
        type: "small" as CardType,
    },
    {
        id: 10,
        title: "The Kshypatriyas",
        category: "UI/UX, Product",
        year: "2025",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
        type: "big" as CardType,
    },
    {
        id: 11,
        title: "Future Work",
        category: "Coming Soon",
        year: "2025",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
        type: "small" as CardType,
    },
    {
        id: 12,
        title: "Kadiyam Nursery",
        category: "Web App",
        year: "2025",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2670&auto=format&fit=crop",
        type: "medium" as CardType,
    },

    // Row 4
    {
        id: 13,
        title: "Green Grow",
        category: "E-commerce",
        year: "2025",
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2670&auto=format&fit=crop",
        type: "medium" as CardType,
    },
    {
        id: 14,
        title: "Plant Life",
        category: "Branding",
        year: "2025",
        image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=2670&auto=format&fit=crop",
        type: "small" as CardType,
    },
    {
        id: 15,
        title: "Urban Flow",
        category: "App Design",
        year: "2025",
        image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2670&auto=format&fit=crop",
        type: "big" as CardType,
    },
    {
        id: 16,
        title: "Neon Drift",
        category: "Concept Art",
        year: "2025",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop",
        type: "medium" as CardType,
    },
];

export function Hero3() {
    return (
        <section className="relative w-full bg-[#1a0b2e]">
            {/* Sticky Text Overlay */}
            <div className="sticky top-0 z-20 flex h-screen w-full items-center justify-center pointer-events-none">
                <div className="text-center">
                    <SectionHeading
                        title="Your Success"
                        accent="Our Work,"
                        reverse
                        className="drop-shadow-2xl"
                    />
                </div>
            </div>

            {/* Scrollable Grid Background */}
            <div className="relative z-10 w-full pb-20 -mt-[80vh] md:-mt-[70vh]">
                <div className="w-[90%] md:w-[80%] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-x-14 md:gap-y-24">
                        {workItems.map((item) => (
                            <div key={item.id} className="relative w-full">
                                {item.type === "small" && <SmallCard item={item} />}
                                {item.type === "medium" && <MediumCard item={item} />}
                                {item.type === "big" && <BigCard item={item} />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Spacer to allow full scroll past end */}
            <div className="h-[20vh]" />
        </section>
    );
}
