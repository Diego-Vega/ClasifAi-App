"use client";

import bannerHeader from "@/public/boul3.jpg";
import { useLenis } from "@/utils/lenis";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
    const { t } = useTranslation();
    const lenis = useLenis();
    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bannerHeader}
                    alt="Waste collection background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center justify-center h-full w-full">
                <div className="p-10 bg-black/70 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        {t("hero.title")}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
                        {t("hero.subtitle")}
                    </p>
                    <Button
                        onClick={() => {
                            lenis?.scrollTo("#problem");
                        }}
                        variant={"secondary"}
                        size="lg"
                        className="text-lg px-8 py-6"
                    >
                        {t("hero.cta")}
                    </Button>
                </div>
            </div>
        </section>
    );
}
