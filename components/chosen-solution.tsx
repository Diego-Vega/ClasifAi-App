"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Proto from "@/public/papeleraproto.png";


export default function ChosenSolution() {
    const { t } = useTranslation();

    const benefits = [
        t("chosenSolution.benefits.1"),
        t("chosenSolution.benefits.2"),
        t("chosenSolution.benefits.3"),
        t("chosenSolution.benefits.4"),
        t("chosenSolution.benefits.5"),
    ];

    return (
        <section
            id="chosen-solution"
            className="relative w-full py-16 md:py-24 bg-white"
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        {t("chosenSolution.title")}
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mb-8 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-2xl font-semibold mb-4">
                            {t("chosenSolution.subtitle")}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {t("chosenSolution.description")}
                        </p>

                        <ul className="space-y-3">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-2 bg-green-100 p-1 rounded-full">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </span>
                                    <span className="text-gray-700">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="order-1 lg:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src={Proto}
                            alt="Smart trash bin prototype"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
