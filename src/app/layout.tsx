import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Efrem Albert Alvin — Creative Technologist & Commercial Visual Producer",
  description:
    "Portofolio resmi dan Web CV Efrem Albert Alvin — Creative Technologist & Commercial Visual Producer berbasis di Bandar Lampung. Rekayasa perangkat lunak Python, otomatisasi media pipeline, dan produksi visual komersial via FOTONIC (FremNett).",
  keywords: [
    "Efrem Albert Alvin",
    "Creative Technologist",
    "FOTONIC",
    "FremNett",
    "Web CV",
    "Universitas Lampung",
    "Color Grading N-Log",
    "Python Automation",
  ],
  authors: [{ name: "Efrem Albert Alvin" }],
  creator: "Efrem Albert Alvin",
  openGraph: {
    title: "Efrem Albert Alvin — Creative Technologist & Commercial Visual Producer",
    description:
      "Menjembatani rekayasa perangkat lunak (Python, web automation, pipeline pemrosesan media) dengan produksi visual komersial (FOTONIC / FremNett).",
    locale: "id_ID",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f17",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0b0f17] text-zinc-100 font-sans selection:bg-sky-500/20 selection:text-sky-300 min-h-screen relative overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
