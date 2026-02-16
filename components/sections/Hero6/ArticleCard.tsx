"use client";



interface ArticleCardProps {
    date: string;
    title: string;
    readTime: string;
    description: string;
    author: {
        name: string;
        role: string;
        image: string;
    };
    image: string;
}

export function ArticleCard({ date, title, readTime, description, author, image }: ArticleCardProps) {
    return (
        <div className="group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-2xl bg-gray-900">
            {/* Background Image - Zooms on Hover */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Default Overlay: Title at Bottom, Date at Top */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 transition-opacity duration-300 group-hover:opacity-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <span className="text-sm font-medium text-white/60">{date}</span>
                <h3 className="text-3xl font-bold leading-tight text-white">
                    {title}
                </h3>
            </div>

            {/* Hover Overlay: Darkened Background with Details Breakdown */}
            <div className="absolute inset-0 flex flex-col justify-end bg-[#1a0b2e]/90 p-8 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">

                {/* Content Container - Slides up slightly on hover */}
                <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <span className="mb-3 block text-sm font-medium text-[#a3ff12]">
                        {readTime}
                    </span>

                    <p className="mb-6 text-base leading-relaxed text-white/80">
                        {description}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                        <img
                            src={author.image}
                            alt={author.name}
                            className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-sm font-bold text-white leading-none mb-1">
                                {author.name}
                            </p>
                            <p className="text-xs text-white/50 leading-none">
                                {author.role}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
