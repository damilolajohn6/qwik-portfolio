import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";

import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-decorative",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Qwik Portfolio",
  description: "Your professional portfolio to land your dream job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${greatVibes.variable} antialiased`}>{children}</body>
    </html>
  );
}
