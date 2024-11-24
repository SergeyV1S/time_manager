import type { Metadata } from "next";

import { Lora } from "next/font/google";

import "../globals.css";
import { Header } from "./_components/Header";

const loraFont = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export const metadata: Metadata = {
  title: "Time Manager",
  description: "Поможем вам правильно управлять своим временем!"
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang='ru'>
    <body className={`${loraFont.variable} font-sans antialiased`}>
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
