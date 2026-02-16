"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "./ArticleCard";

// Mock Data matching the screenshot reference
const articles = [
    {
        id: 1,
        date: "Jan 27, 2025",
        title: "What's Next In The Digital Design",
        readTime: "4min read",
        description: "Every designer has real-world project experience, ensuring they know how to tackle practical design challenges.",
        author: {
            name: "Bhanu chandu billa",
            role: "UIUX Designer @studio dezu",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop"
        },
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop" // Retro Car / Cyberpunk car
    },
    {
        id: 2,
        date: "Feb 10, 2025",
        title: "The Future of AI in Creative Workflows",
        readTime: "5min read",
        description: "Exploring how artificial intelligence is reshaping the creative process, from ideation to final execution.",
        author: {
            name: "Sarah Chen",
            role: "Product Lead @TechFlow",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
        },
        image: "https://images.unsplash.com/photo-1635322966219-b75ed3a90e2d?q=80&w=2671&auto=format&fit=crop" // Futurstic abstract
    },
    {
        id: 3,
        date: "Feb 15, 2025",
        title: "Mastering Typography in 2025",
        readTime: "3min read",
        description: "A deep dive into the trending typefaces and layout techniques that are defining modern web aesthetics.",
        author: {
            name: "Alex Morgan",
            role: "Art Director @CreativeBoom",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
        },
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" // Abstract geometric
    }
];

export function Hero6() {
    return (
        <section className="relative w-full bg-[#0f0418] py-24 md:py-32">
            <Container>
                {/* Header */}
                <div className="mb-16">
                    <SectionHeading
                        title="0ur Latest"
                        accent="Articles & Resources"
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <ArticleCard
                            key={article.id}
                            {...article}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
