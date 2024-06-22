import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar/>
          <div className="mx-10 container flex items-start gap-4 mt-6 ">
            <Sidebar/>
            {children}
          </div>
        </ThemeProvider>
        </body>
    </html>
  );
}
