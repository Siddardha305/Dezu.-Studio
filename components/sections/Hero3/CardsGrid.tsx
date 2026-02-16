"use client";

import { Container } from "@/components/layout/Container";
import { WorkCard } from "./WorkCard";

// Mock Data for Work Items
const workItems = [
    // Row 1: 4 Cards
    {
        id: 1,
        title: "Ventura Pranas",
        category: "UI/UX, Dev",
        year: "2024",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2670&auto=format&fit=crop",
        colSpan: 1,
        height: "h-64",
    },
    {
        id: 2,
        title: "HighCloud",
        category: "Rebranding",
        year: "2023",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        colSpan: 1,
        height: "h-64",
    },
    {
        id: 3,
        title: "Qylis",
        category: "Branding",
        year: "2023",
        image: "https://images.unsplash.com/photo-1481487484168-9b9307068539?q=80&w=2670&auto=format&fit=crop",
        colSpan: 1,
        height: "h-64",
    },
    {
        id: 4,
        title: "Lelutis",
        category: "Design",
        year: "2021",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop",
        colSpan: 1,
        height: "h-64",
    },

    // Row 2: 3 Cards (1 + 2 + 1)
    {
        id: 5,
        title: "TIE Silicon Valley",
        category: "Rebranding, UI/UX",
        year: "2024",
        image: "https://images.unsplash.com/photo-1590935217281-8f192905cbd9?q=80&w=2670&auto=format&fit=crop",
        colSpan: 1,
        height: "h-64",
    },
    {
        id: 6,
        title: "Mall 360",
        category: "Branding, UI/UX",
        year: "2025",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
        colSpan: 2,
        height: "h-64",
    },
    {
        id: 7,
        title: "Naeem Zafar",
        category: "Personal Brand",
        year: "2021",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
        colSpan: 1,
        height: "h-64",
    },

    // Row 3: 4 Cards (1+1+1+1)
    {
        id: 8,
        title: "Mad Box",
        category: "Packaging",
        year: "2022",
        image: "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?q=80&w=2670&auto=format&fit=crop",
        colSpan: 1,
        height: "h-64",
    },
    {
        id: 9,
        title: "Ecomall",
        category: "UI Design",
        year: "2021",
        image: "https://images.unsplash.com/photo-1523289333742-be1122a73bce?q=80&w=2670&auto=format&fit=crop",
        colSpan: 1,
        height: "h-64",
    },
    {
        id: 10,
        title: "The Kshypatriyas",
        category: "UI/UX, Product",
        year: "2025",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
        colSpan: 1,
        height: "h-64",
    },
    {
        id: 11,
        title: "Future Work",
        category: "Coming Soon",
        year: "2025",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
        colSpan: 1,
        height: "h-64",
    },

    // Row 4: 3 Cards (1 + 2 + 1)
    {
        id: 12,
        title: "Kadiyam Nursery",
        category: "Web App",
        year: "2025",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2670&auto=format&fit=crop",
        colSpan: 1,
        height: "h-64",
    },
    {
        id: 13,
        title: "Green Grow",
        category: "E-commerce",
        year: "2025",
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2670&auto=format&fit=crop",
        colSpan: 2,
        height: "h-64",
    },
    {
        id: 14,
        title: "Plant Life",
        category: "Branding",
        year: "2025",
        image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=2670&auto=format&fit=crop",
        colSpan: 1,
        height: "h-64",
    },
];

export function CardsGrid() {
    return (
        <div className="relative z-10 w-full pb-20 -mt-[80vh] md:-mt-[70vh]">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                    {workItems.map((item) => (
                        <div
                            key={item.id}
                            className={`relative w-full ${item.colSpan === 2 ? "col-span-2" : "col-span-1"
                                }`}
                        >
                            <WorkCard
                                item={{
                                    ...item,
                                    width: "100%",
                                    className: `relative w-full ${item.height} hover:z-30`
                                }}
                                style={{ position: "relative", top: "auto", left: "auto", width: "100%" }}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
