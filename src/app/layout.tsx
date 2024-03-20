import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Main/Header";
import SmoothScrolling from "@/components/Main/SmoothScrolling";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Mohamad Zubi | Developer & Innovator",
  description:
    "Hey there, My name is Mohamad Zubi, I’m a software engineer specialized in building Web & Mobile Apps. I also love designing them to create vibrant UI experiences. In the past few month I focused on personal project to upgrade my skills and be more efficiant.",
  verification: { google: "LM_VD8xcxTzGIyvMcF0rIMAVhlZT0iDebBKqC6IFw_k" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="LM_VD8xcxTzGIyvMcF0rIMAVhlZT0iDebBKqC6IFw_k"
        />
      </head>
      <body className={` bg-main-page main-page-specific`}>
        <Providers>
          <SmoothScrolling />
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
