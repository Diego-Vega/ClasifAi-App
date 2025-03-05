import I18nProvider from "@/i18n/i18n-provider";
import { ReactLenis } from "@/utils/lenis";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Intelligent Waste Collection",
    description: "Revolutionizing urban waste management with smart technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <ReactLenis root>
                <body className={inter.className}>
                    <I18nProvider>{children}</I18nProvider>
                </body>
            </ReactLenis>
        </html>
    );
}
