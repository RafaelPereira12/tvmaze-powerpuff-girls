import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./base/navbar/Navbar";
import TanstackProvider from "./providers/tanstack-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Powerpuff Episode Consultation",
  description: "Welcome to the Powerpuff Girls Consultation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackProvider>
          <Navbar />
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
