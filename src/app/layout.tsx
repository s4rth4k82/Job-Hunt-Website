import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Hunt App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="relative w-full flex flex-col items-center justify-center">
          <Navbar />
        </div>
        {children}
        <Analytics />
        {/* <div className="relative  flex flex-col items-center justify-center"> */}
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}