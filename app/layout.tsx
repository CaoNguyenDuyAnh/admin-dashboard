'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Pagewrapper from "@/components/pagewrapper";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar></Sidebar>  
          <Header></Header>
          <Pagewrapper >
            {children}
          </Pagewrapper>
        </div>
      </body>
    </html>
  );
}
