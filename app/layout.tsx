import type { Metadata } from "next";

import { Lora } from "next/font/google";

import "./globals.css";

const loraFont = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export const metadata: Metadata = {
  title: "Time Manager",
  description: "Excellent time manager for anyone!"
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang='ru'>
    <body className={`${loraFont.variable} font-sans antialiased`}>{children}</body>
  </html>
);

export default RootLayout;
