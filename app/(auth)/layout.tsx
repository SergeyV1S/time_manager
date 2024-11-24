import type { Metadata } from "next";

import { Lora } from "next/font/google";

import "../globals.css";
import "../globals.css";

const loraFont = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export const metadata: Metadata = {
  title: "Time Manager | Авторизация Регистрация",
  description: "Создайте аккаунт или войдите в существующий, чтобы получить доступ к функционалу платформы"
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='ru'>
    <body className={`${loraFont.variable} font-sans antialiased`}>{children}</body>
  </html>
);

export default AuthLayout;
