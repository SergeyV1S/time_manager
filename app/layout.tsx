import { Lora } from "next/font/google";

import { ThemeProvider } from "@/components/theme";
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
  <html lang='ru' suppressHydrationWarning>
    <body className={`${loraFont.variable} bg-wgite dark:bg-slate-950 font-sans antialiased`}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        {children}
        <Toaster />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
