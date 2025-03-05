"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Team() {
    const { t } = useTranslation();
    const baseUrlImageProfile: string = "/member";

    const teamMembers = [
        {
            name: "Nathalia Abonia",
            role: t("team.roles.computerEngineer1"),
            image: baseUrlImageProfile,
            social: {
                twitter: "#",
                linkedin: "#",
                github: "#",
            },
        },
        {
            name: "Asly Silva",
            role: t("team.roles.computerEngineer1"),
            image: baseUrlImageProfile,
            social: {
                twitter: "#",
                linkedin: "#",
                github: "#",
            },
        },
        {
            name: "Carlos Rodriguez",
            role: t("team.roles.computerEngineer2"),
            image: baseUrlImageProfile,
            social: {
                twitter: "#",
                linkedin: "#",
                github: "#",
            },
        },
        {
            name: "Diego Vega",
            role: t("team.roles.computerEngineer2"),
            image: baseUrlImageProfile,
            social: {
                twitter: "#",
                linkedin: "#",
                github: "#",
            },
        },
        {
            name: "Víctor Estupiñan",
            role: t("team.roles.computerEngineer2"),
            image: baseUrlImageProfile,
            social: {
                twitter: "#",
                linkedin: "#",
                github: "#",
            },
        },
    ];

    return (
        <section id="team" className="relative w-full py-16 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        {t("team.title")}
                    </h2>
                    <div className="w-24 h-1 bg-purple-500 mb-8 rounded-full"></div>
                    <p className="text-gray-600 max-w-3xl">
                        {t("team.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
                                <Image
                                    src={
                                        member.image + (index + 1) + ".png" ||
                                        "/placeholder.svg"
                                    }
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <h3 className="text-xl font-semibold">
                                {member.name}
                            </h3>
                            <p className="text-gray-500 mb-4">{member.role}</p>

                            <div className="flex space-x-3">
                                <a
                                    href={member.social.twitter}
                                    className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                                    aria-label={`${member.name}'s Twitter`}
                                >
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a
                                    href={member.social.linkedin}
                                    className="p-2 text-gray-400 hover:text-blue-700 transition-colors"
                                    aria-label={`${member.name}'s LinkedIn`}
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a
                                    href={member.social.github}
                                    className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                                    aria-label={`${member.name}'s GitHub`}
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
