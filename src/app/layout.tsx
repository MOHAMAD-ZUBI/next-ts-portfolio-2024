import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Main/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamad Zubi",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-main-page main-page-specific`}><Providers>
        <Header/>
      {children}</Providers></body>
    </html>
  );
}
