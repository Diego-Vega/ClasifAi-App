"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PrototypeGallery() {
    const { t } = useTranslation();

    const prototypes = [
        {
            id: 1,
            title: t("prototypeGallery.items.1.title"),
            description: t("prototypeGallery.items.1.description"),
            image: "/gal0.png",
        },
        {
            id: 2,
            title: t("prototypeGallery.items.2.title"),
            description: t("prototypeGallery.items.2.description"),
            image: "/gal1.jpg",
        },
        {
            id: 3,
            title: t("prototypeGallery.items.3.title"),
            description: t("prototypeGallery.items.3.description"),
            image: "/gal2.jpg",
        },
        {
            id: 4,
            title: t("prototypeGallery.items.4.title"),
            description: t("prototypeGallery.items.4.description"),
            image: "/gal3.jpg",
        },
        {
            id: 5,
            title: t("prototypeGallery.items.5.title"),
            description: t("prototypeGallery.items.5.description"),
            image: "/gal12.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const carouselRef = useRef(null);

    const goToSlide = useCallback(
        (index: any) => {
            if (isAnimating) return;
            setIsAnimating(true);
            setCurrentIndex(index);
            setTimeout(() => setIsAnimating(false), 500);
        },
        [isAnimating],
    );

    const nextSlide = useCallback(() => {
        if (isAnimating) return;
        const newIndex = (currentIndex + 1) % prototypes.length;
        goToSlide(newIndex);
    }, [currentIndex, isAnimating, goToSlide, prototypes.length]);

    const prevSlide = useCallback(() => {
        if (isAnimating) return;
        const newIndex =
            (currentIndex - 1 + prototypes.length) % prototypes.length;
        goToSlide(newIndex);
    }, [currentIndex, isAnimating, goToSlide, prototypes.length]);

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section
            id="prototype-gallery"
            className="relative w-full py-16 md:py-24 bg-gray-50"
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        {t("prototypeGallery.title")}
                    </h2>
                    <div className="w-24 h-1 bg-teal-500 mb-8 rounded-full"></div>
                    <p className="text-gray-600 max-w-3xl">
                        {t("prototypeGallery.description")}
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Carousel */}
                    <div
                        ref={carouselRef}
                        className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-xl"
                    >
                        {prototypes.map((prototype, index) => (
                            <div
                                key={prototype.id}
                                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                                    index === currentIndex
                                        ? "opacity-100 translate-x-0"
                                        : index < currentIndex
                                        ? "opacity-0 -translate-x-full"
                                        : "opacity-0 translate-x-full"
                                }`}
                            >
                                <Image
                                    src={prototype.image || "/placeholder.svg"}
                                    alt={prototype.title}
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />

                                {/* Caption */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                                        {prototype.title}
                                    </h3>
                                    <p className="text-white/80">
                                        {prototype.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation buttons */}

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10"
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>

                    {/* Indicators */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {prototypes.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    index === currentIndex
                                        ? "bg-teal-500 w-6"
                                        : "bg-gray-300"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
