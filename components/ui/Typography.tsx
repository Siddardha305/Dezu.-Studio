import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = ({ level = 1, className, children, ...props }: HeadingProps) => {
    const Tag = `h${level}` as React.ElementType;
    const sizes = {
        1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
        2: "text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        3: "text-2xl font-semibold tracking-tight",
        4: "text-xl font-semibold tracking-tight",
        5: "text-lg font-semibold tracking-tight",
        6: "text-base font-semibold tracking-tight",
    };

    return (
        <Tag className={cn(sizes[level], "scroll-m-20", className)} {...props}>
            {children}
        </Tag>
    );
};

export const Paragraph = ({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props}>
            {children}
        </p>
    );
};

export const Lead = ({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p className={cn("text-xl text-zinc-500 dark:text-zinc-400", className)} {...props}>
            {children}
        </p>
    );
};
