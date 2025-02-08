import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import { createMetadata } from "@/lib/utils";
import Footer from "@/components/Footer";

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
        <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px overflow-x-hidden min-h-[100vh]">
          <div className="flex-1 flex flex-col h-full overflow-x-hidden">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>

        <Toaster />
      </body>
    </html>
  );
}
