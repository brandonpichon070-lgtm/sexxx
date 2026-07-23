import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";

import "./globals.css";

import { BackgroundProvider } from "@/components/providers/BackgroundProvider";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const playfair = Playfair_Display({
  variable: "--font-display",

  subsets: ["latin"],

  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Velvet Osmosis",
  description: "Tienda premium de bienestar íntimo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${playfair.variable}
        h-full
        antialiased
      `}
    >
      <body>
        <body>
          <BackgroundProvider>{children}</BackgroundProvider>
        </body>
      </body>
    </html>
  );
}
