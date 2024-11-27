import { Lora } from "next/font/google";

import { Toaster } from "@/components/ui";

import "./globals.css";

const loraFont = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang='ru'>
    <body className={`${loraFont.variable} font-sans antialiased`}>
      {children}
      <Toaster />
    </body>
  </html>
);

export default RootLayout;
