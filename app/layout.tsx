import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { Providers } from "@/components/Providers";

import "./globals.css";

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "TM",
  description: "A Progressive Web App for time management."
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang='ru' suppressHydrationWarning>
    <head>
      <link rel='manifest' href='/manifest.json' />
      <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
      <meta name='theme-color' content='#000000' />
    </head>
    <body className={`${interFont.variable} bg-wgite dark:bg-slate-950 font-sans antialiased`}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
