import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SwRegister } from "@/components/SwRegister";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-jakarta", display: "swap" });

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://baclab.ro";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: "BacLab — Înveți cu sens.", template: "%s · BacLab" },
  description: "Pregătire pentru Bacalaureat la biologie: recapitulare inteligentă, simulări cu notă și probleme generate. Clar. Logic. Pe înțeles.",
  manifest: "/manifest.webmanifest",
  openGraph: { title: "BacLab — Biologia are sens.", description: "Clar. Logic. Pe înțeles.", images: ["/brand/og.png"], locale: "ro_RO", type: "website" },
  twitter: { card: "summary_large_image", images: ["/brand/og.png"] },
};

export const viewport: Viewport = { themeColor: "#30243A", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={jakarta.variable}>
      <body className="min-h-dvh font-sans antialiased">
        {children}
        <SwRegister />
      </body>
    </html>
  );
}
