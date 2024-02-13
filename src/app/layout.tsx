import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Main/Header";
import SmoothScrolling from "@/components/Main/SmoothScrolling";



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
      <body className={` bg-main-page main-page-specific`}><Providers>
        <SmoothScrolling/>
        <Header/>
      {children}</Providers></body>
    </html>
  );
}
