import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Providers from "../providers";
import { DialogApp } from "../../components/dialog-app";
import { NavBar } from "../../components/nav-bar";
import { Box } from "@chakra-ui/react";

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
        className={`${InterSans.variable} antialiased`}>
        <Providers>
          <NavBar />
          <Box minH="100vh" bg="gray.50">
            <Box p={8}>
              {children}
            </Box>
          </Box>
          <DialogApp />
        </Providers>
      </body>
    </html>
  );
}
