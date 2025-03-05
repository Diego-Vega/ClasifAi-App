"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [mounted, setMounted] = useState(false);

    // Ensure component is mounted before rendering to avoid hydration issues
    useEffect(() => {
        setMounted(true);
    }, []);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        // Store the language preference in localStorage
        localStorage.setItem("i18nextLng", lng);
        // No need to refresh with client-side i18next
    };

    if (!mounted) return null;

    return (
        <div className="fixed top-4 right-5 z-50">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/80 hover:bg-white shadow-md"
                    >
                        <Globe className="h-5 w-5" />
                        <span className="sr-only">Switch language</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white" align="end">
                    <DropdownMenuItem onClick={() => changeLanguage("en")}>
                        <span
                            className={`${
                                i18n.language === "en" ? "font-bold" : ""
                            }`}
                        >
                            English
                        </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => changeLanguage("es")}>
                        <span
                            className={`${
                                i18n.language === "es" ? "font-bold" : ""
                            }`}
                        >
                            Español
                        </span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
