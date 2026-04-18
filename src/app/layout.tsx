import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/shared/footer/Footer";

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
      <body className="min-h-full flex flex-col">
        <Navbar />
        {/* Added top padding to account for fixed navbar */}
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
