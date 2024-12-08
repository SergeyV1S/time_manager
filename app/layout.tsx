import type { Metadata } from "next";

import { Lora } from "next/font/google";

import { ThemeProvider } from "@/components/theme";
import { Toaster, TooltipProvider } from "@/components/ui";

import "./globals.css";

const loraFont = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
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
    <body className={`${loraFont.variable} bg-wgite dark:bg-slate-950 font-sans antialiased`}>
      <TooltipProvider>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </TooltipProvider>
    </body>
  </html>
);

export default RootLayout;
