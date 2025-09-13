import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Harsh's Portfolio | Full-Stack Developer",
  description:
    "Portfolio of Harsh, a Full-Stack Developer skilled in React, Next.js, Spring Boot, and MERN stack. Explore projects, skills, and experience.",
  keywords: [
    "Harsh Portfolio",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Spring Boot",
    "MERN",
    "Web Development",
  ],
  authors: [{ name: "Harsh", url: "https://harshportfolio21.vercel.app/" }],
  openGraph: {
    title: "Harsh's Portfolio",
    description:
      "Explore Harsh’s projects, skills, and experience in web development.",
    url: "https://harshportfolio21.vercel.app/",
    siteName: "Harsh Portfolio",
    images: [
      {
        url: "https://harshportfolio21.vercel.app/", // your preview image
        width: 1200,
        height: 630,
        alt: "Harsh Portfolio Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
 
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
        {children}
      </body>
    </html>
  );
}
