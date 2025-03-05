"use client";

import trash from "@/public/basuras2.jpg";
import { Trash2 } from "lucide-react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Problem() {
    const { t } = useTranslation();

    const challenges = [
        t("problem.challenges.1"),
        t("problem.challenges.2"),
        t("problem.challenges.3"),
        t("problem.challenges.4"),
    ];

    return (
        <section
            id="problem"
            className="relative w-full py-16 md:py-24 bg-white"
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="p-3 rounded-full bg-red-100 mb-4">
                        <Trash2 className="h-8 w-8 text-red-600" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        {t("problem.title")}
                    </h2>
                    <div className="w-24 h-1 bg-red-500 mb-8 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold">
                            {t("problem.subtitle")}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {t("problem.description")}
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            {challenges.map((challenge, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-2 text-red-500">•</span>
                                    <span>{challenge}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src={trash}
                            alt="Waste management problems in urban areas"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
