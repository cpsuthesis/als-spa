import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Alternative learning system",
  description: "Alternative learning system SPA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
    {/*     <Header /> */}
        <main>
          {children}
        </main>
      {/*   <Footer /> */}
      </body>
    </html>
  );
}
