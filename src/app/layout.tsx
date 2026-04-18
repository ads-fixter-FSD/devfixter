import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const interTight = Inter_Tight({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevFixter | High-Performance Development",
  description: "DevFixter is your premier platform for modern, scalable, and beautifully designed web application development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background-dark">
        <Navbar />
        {/* Added top padding to account for fixed navbar */}
        <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
