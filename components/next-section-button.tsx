"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "next-i18next";

interface NextSectionButtonProps {
    targetId: string;
    className?: string;
}

export default function NextSectionButton({
    targetId,
    className = "",
}: NextSectionButtonProps) {
    const { t } = useTranslation();

    const scrollToNextSection = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Button
            variant="outline"
            size="icon"
            className={`rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-300 animate-bounce ${className}`}
            onClick={scrollToNextSection}
            aria-label={`${t("navigation.next")} ${targetId} section`}
        >
            <ChevronDown className="h-5 w-5" />
        </Button>
    );
}
