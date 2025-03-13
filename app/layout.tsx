import StarsCanvas from "@/components/main/StarBackground";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Thomas Portfolio",
  description: "This is my portfolio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
