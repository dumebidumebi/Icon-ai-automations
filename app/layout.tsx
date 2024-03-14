import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


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
    <>
      {/* <Header/> */}
    <html lang="en">
      <body className={inter.className}>{children}

      </body>
    </html>
    </>
  );
}
