import "./globals.css";

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { SITENAME } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
    description: `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
    metadataBase: new URL("https://bokepayah.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} Video Bokep Indo Jepang Barat Viral Terbaru`,
        description: `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'k8CkgYeN6sDoDdK0pnKWDzMM3qv_5GhEh0KV3u-UyxM',
        yandex: '515825df33868ec2',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "description": "Bokep Ayah Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.",
        "logo": "https://bokepayah.pages.dev/favicon.ico",
        "url": "https://bokepayah.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://bokepayah.pages.dev"
            },
            "foundingDate":"2024-02-01"
        }
        const jsonLd1 = {
            "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${SITENAME}`,
        "url": "https://bokepayah.pages.dev",
        "description": "Bokep Ayah Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.",
        "image": "https://bokepayah.pages.dev/favicon.ico",
        "potentialAction":{
            "@type":"ReadAction",
            "target":"https://bokepayah.pages.dev/"}
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME}`,
        "url": "https://bokep-tante.pages.dev",
        "description": "Bokep Ayah Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.",
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://bokepayah.pages.dev/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
