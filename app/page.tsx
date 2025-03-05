"use client";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Solutions from "@/components/solutions";
import ChosenSolution from "@/components/chosen-solution";
import InteractiveMap from "@/components/interactive-map";
import Team from "@/components/team";
import PrototypeGallery from "@/components/prototype-gallery";
import CallToAction from "@/components/call-to-action";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
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
