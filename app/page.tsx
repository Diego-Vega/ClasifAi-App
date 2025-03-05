"use client";
import CallToAction from "@/components/call-to-action";
import ChosenSolution from "@/components/chosen-solution";
import Hero from "@/components/hero";
import InteractiveMap from "@/components/interactive-map";
import LanguageSwitcher from "@/components/language-switcher";
import Problem from "@/components/problem";
import PrototypeGallery from "@/components/prototype-gallery";
import Solutions from "@/components/solutions";
import Team from "@/components/team";

export default function Home() {
    return (
        <main className="relative flex min-h-screen flex-col items-center">
            <LanguageSwitcher />
            <Hero />
            <Problem />
            <Solutions />
            <ChosenSolution />
            <InteractiveMap />
            <Team />
            <PrototypeGallery />
            <CallToAction />
        </main>
    );
}
