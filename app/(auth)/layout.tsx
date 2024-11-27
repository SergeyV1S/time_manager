import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time Manager | Авторизация Регистрация",
  description: "Создайте аккаунт или войдите в существующий, чтобы получить доступ к функционалу платформы"
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default AuthLayout;
