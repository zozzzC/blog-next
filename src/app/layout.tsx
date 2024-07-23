import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "A mini-blog test using Next and Typescript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/> 
        {children}
      {/* <div className="bg-red-600">
        <p>test</p>
      </div>
      <div className="h-full grow bg-slate-700 ">
        <p>hi</p>       </div>*/}
      </body>
    </html>
  );
}
