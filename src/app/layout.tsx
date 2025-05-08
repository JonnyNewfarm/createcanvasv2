import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import { createMetadata } from "@/lib/utils";
import Footer from "@/components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = createMetadata();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px  min-h-[100vh]">
          <div className="flex-1 flex flex-col grainy-dark  overflow-clip">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>

        <Toaster />
      </body>
    </html>
  );
}
