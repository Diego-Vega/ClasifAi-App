"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslation } from "next-i18next";
import { Textarea } from "./ui/textarea";

export default function CallToAction() {
    const { t } = useTranslation();

    return (
        <section
            id="contact"
            className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-100"
        >
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <div className="flex flex-col items-start">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                                {t("contact.title")}
                            </h2>
                            <div className="w-24 h-1 bg-blue-500 mb-8 rounded-full"></div>
                            <p className="text-gray-600 mb-8 max-w-md">
                                {t("contact.description")}
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <Mail className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                                    <div>
                                        <h3 className="font-medium">
                                            {t("contact.contactInfo.email")}
                                        </h3>
                                        <p className="text-gray-600">
                                            papeleras-inteligentes@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                                    <div>
                                        <h3 className="font-medium">
                                            {t("contact.contactInfo.phone")}
                                        </h3>
                                        <p className="text-gray-600">
                                            +57 300 123 4567
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                                    <div>
                                        <h3 className="font-medium">
                                            {t("contact.contactInfo.address")}
                                        </h3>
                                        <p className="text-gray-600">
                                            Cali. Centro Valle del Lili - Cl 25
                                            # 115-85 Km. 2 vía Cali-Jamundí
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Button size="lg" className="group">
                                <span>{t("contact.cta")}</span>
                                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6">
                            {t("contact.form.title")}
                        </h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium"
                                    >
                                        {t("contact.form.name")}
                                    </label>
                                    <Input
                                        id="name"
                                        placeholder={t("contact.form.name")}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium"
                                    >
                                        {t("contact.form.email")}
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder={t("contact.form.email")}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="subject"
                                    className="text-sm font-medium"
                                >
                                    {t("contact.form.subject")}
                                </label>
                                <Input
                                    id="subject"
                                    placeholder={t("contact.form.subject")}
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium"
                                >
                                    {t("contact.form.message")}
                                </label>
                                <Textarea
                                    id="message"
                                    placeholder={t("contact.form.message")}
                                    rows={4}
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                {t("contact.form.submit")}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
