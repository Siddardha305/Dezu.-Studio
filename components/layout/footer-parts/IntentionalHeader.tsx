"use client";

export function IntentionalHeader() {
    return (
        <div className="flex flex-col gap-8 max-w-sm">
            <div className="flex flex-col">
                <h2 className="text-4xl font-black uppercase leading-none text-[#a3ff12] md:text-5xl">
                    INTENTIONAL
                </h2>
                <h2 className="text-4xl font-black uppercase leading-none text-black md:text-5xl">
                    BY DESIGN
                </h2>
            </div>

            <button className="w-fit rounded-none bg-[#a3ff12] px-8 py-3 text-sm font-bold uppercase text-black transition-colors hover:bg-black hover:text-[#a3ff12]">
                Let's Talk
            </button>
        </div>
    );
}
