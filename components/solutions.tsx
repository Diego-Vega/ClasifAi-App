"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Droplet, Recycle, Trash } from "lucide-react";
import { useTranslation } from "next-i18next";

export default function Solutions() {
    const { t } = useTranslation();

    const solutions = [
        {
            icon: <Droplet className="h-10 w-10 text-blue-500" />,
            title: t("solutions.items.1.title"),
            description: t("solutions.items.1.description"),
        },
        {
            icon: <Recycle className="h-10 w-10 text-green-500" />,
            title: t("solutions.items.2.title"),
            description: t("solutions.items.2.description"),
        },
        {
            icon: <Trash className="h-10 w-10 text-amber-500" />,
            title: t("solutions.items.3.title"),
            description: t("solutions.items.3.description"),
        },
    ];

    return (
        <section
            id="solutions"
            className="relative w-full py-16 md:py-24 bg-gray-50"
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        {t("solutions.title")}
                    </h2>
                    <div className="w-24 h-1 bg-green-500 mb-8 rounded-full"></div>
                    <p className="text-gray-600 max-w-3xl">
                        {t("solutions.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => (
                        <Card
                            key={index}
                            className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <CardHeader className="flex flex-col items-center justify-center pb-2">
                                <div className="p-3 rounded-full bg-gray-100 mb-4">
                                    {solution.icon}
                                </div>
                                <CardTitle className="text-center">
                                    {solution.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardDescription className="text-base">
                                    {solution.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
