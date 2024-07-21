import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahead app",
  description: "Created using Next JS and Designed in Figma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar/>
        <SpeedInsights/>
        {children}</body>
    </html>
  );
}
