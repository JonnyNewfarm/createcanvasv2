import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Alegreya,
  Alegreya_Sans,
  Aleo,
  Arapey,
  Cormorant,
  Gelasio,
  Lato,
  Merriweather,
  Montserrat,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import { createMetadata } from "@/lib/utils";

const inter = Playfair_Display({ subsets: ["latin"] });

export const metadata = createMetadata();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ background: "#f2f7f8", overflowX: "hidden" }}
      >
        <Navbar />
        <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px">
          <div className="flex-1 flex flex-col h-full">
            <Providers>{children}</Providers>
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
