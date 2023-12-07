import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/components/next-auth-provider/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

interface IRootLayoutProps extends PropsWithChildren {}

export const metadata: Metadata = {
  title: "Netflix",
  description: "",
};

export default async function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
