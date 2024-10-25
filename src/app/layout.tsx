import type { Metadata } from "next";
import { Inter, Almarai } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

const almarai = Almarai({ subsets: ["arabic"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Sudhajal",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <div className="min-h-dvh ">{children}</div>
        <div className="w-full  ">
          <Footer />
        </div>
      </body>
    </html>
  );
}
