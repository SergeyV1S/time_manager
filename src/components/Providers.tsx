"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import { ThemeProvider } from "@/components/theme";
import { Toaster, TooltipProvider } from "@/components/ui";

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <TooltipProvider>
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      {children}
      <Toaster />
      <ProgressBar height='4px' color='#0000ff' options={{ showSpinner: false }} shallowRouting />
    </ThemeProvider>
  </TooltipProvider>
);
