import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Script from "next/script";
import Head from "next/head";

export const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Icon AI Automations",
  description: "Icon AI Automations",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      {/* <Header/> */}
    <html lang="en">
      <body className={inter.className}>{children}

      </body>
    </html>
    </ClerkProvider>
  );
}
