"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
    const [mounted, setMounted] = useState(false);
    let i18n: any; // Evita errores en el servidor

    try {
        // Intentamos obtener la instancia de i18n
        i18n = useTranslation().i18n;
    } catch (error) {
        console.error("Error en useTranslation:", error);
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    const changeLanguage = (lng: string) => {
        if (i18n) {
            i18n.changeLanguage(lng);
            localStorage.setItem("i18nextLng", lng);
        }
    };

    if (!mounted || !i18n) return null; // Evita renderizar en el servidor sin datos

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
                            className={
                                i18n.language === "en" ? "font-bold" : ""
                            }
                        >
                            English
                        </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => changeLanguage("es")}>
                        <span
                            className={
                                i18n.language === "es" ? "font-bold" : ""
                            }
                        >
                            Español
                        </span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
