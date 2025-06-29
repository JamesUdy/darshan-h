import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createMetadata } from "./lib/metadata";
import Hero from "./components/Hero";
import GroupLayout from "./components/GroupLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden !bg-[rgb(15,15,15)] w-screen min-h-screen flex flex-col items-center justify-start gap-y-6 pb-24`}
      >
        <GroupLayout>
          {children}
        </GroupLayout>
      </body>
    </html>
  );
}
