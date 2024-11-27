import type { Metadata } from "next";

import { Header } from "./_components/Header";

export const metadata: Metadata = {
  title: "Time Manager",
  description: "Поможем вам правильно управлять своим временем!"
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <>
    <Header />
    {children}
  </>
);

export default RootLayout;
