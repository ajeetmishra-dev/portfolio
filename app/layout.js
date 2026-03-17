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

export const metadata = {
  title: "Ajeet Mishra | Aspiring Software Developer",
  description:
    "Personal portfolio of Ajeet Mishra – B.Tech student and aspiring software developer passionate about building modern web applications.",
  keywords: [
    "Ajeet Mishra",
    "Software Developer",
    "Portfolio",
    "Web Developer",
    "B.Tech Student",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Ajeet Mishra" }],
  openGraph: {
    title: "Ajeet Mishra | Aspiring Software Developer",
    description:
      "Personal portfolio of Ajeet Mishra – B.Tech student and aspiring software developer.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050510] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
