import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const InterSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600']
});

export const metadata: Metadata = {
  title: "Monorepo Gym",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${InterSans.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
