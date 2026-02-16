"use client";

import { useAnimate } from "framer-motion";
import React, { useRef } from "react";

interface MouseImageTrailProps {
    children: React.ReactNode;
    images: string[];
    renderImageBuffer: number;
    rotationRange: number;
}

export const MouseImageTrail = ({
    children,
    images,
    renderImageBuffer,
    rotationRange,
}: MouseImageTrailProps) => {
    const [scope, animate] = useAnimate();
    const lastRenderPosition = useRef({ x: 0, y: 0 });
    const imageRenderCount = useRef(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;

        const distance = calculateDistance(
            clientX,
            clientY,
            lastRenderPosition.current.x,
            lastRenderPosition.current.y
        );

        if (distance >= renderImageBuffer) {
            lastRenderPosition.current.x = clientX;
            lastRenderPosition.current.y = clientY;

            renderNextImage(clientX, clientY);
        }
    };

    const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    };

    const renderNextImage = (clientX: number, clientY: number) => {
        const imageIndex = imageRenderCount.current % images.length;
        const selector = `.trail-image-${imageIndex}`;

        // Scope safety: Use scope.current instead of document
        const el = scope.current.querySelector(selector) as HTMLElement;

        if (el) {
            // FIX: Calculate position relative to container, not viewport.
            // Elements are absolute, container is relative.
            // Left = ClientX - ContainerLeft
            // Top = ClientY - ContainerTop
            const rect = scope.current.getBoundingClientRect();
            const localX = clientX - rect.left;
            const localY = clientY - rect.top;

            el.style.top = `${localY}px`;
            el.style.left = `${localX}px`;
            el.style.zIndex = imageRenderCount.current.toString();

            const rotation = Math.random() * rotationRange;

            animate(
                selector,
                {
                    opacity: [0, 1],
                    transform: [
                        `translate(-50%, -25%) scale(0.5) rotate(${rotation}deg)`,
                        `translate(-50%, -50%) scale(1) rotate(${rotation}deg)`,
                    ],
                },
                { type: "spring", damping: 15, stiffness: 200 }
            );

            animate(
                selector,
                {
                    opacity: [1, 0],
                },
                { ease: "linear", duration: 0.5, delay: 0.2 }
            );

            imageRenderCount.current = imageRenderCount.current + 1;
        }
    };

    return (
        <div
            ref={scope}
            className="relative w-full overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {children}

            {images.map((img, index) => (
                <img
                    className={`trail-image-${index} pointer-events-none absolute left-0 top-0 h-40 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0`}
                    src={img}
                    alt={`Mouse trail ${index}`}
                    key={index}
                />
            ))}
        </div>
    );
};
