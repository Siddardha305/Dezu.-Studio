"use client";

export function StickyText() {
    return (
        <div className="sticky top-0 z-20 flex h-screen w-full items-center justify-center pointer-events-none">
            <div className="text-center">
                <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter text-[#a3ff12] md:text-5xl lg:text-6xl drop-shadow-2xl">
                    OUR WORK,
                    <br />
                    <span className="text-white">YOUR SUCCESS</span>
                </h2>
            </div>
        </div>
    );
}
