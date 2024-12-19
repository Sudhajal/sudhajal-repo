import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

// Import the Lato font with desired subsets and weights
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Sudhajal - Affordable Water Purifier AMC Services in Nashik",
  description: "Get reliable water purifier repair, maintenance & AMC services for top brands in Nashik. Contact Sudhajal today for clean, safe water!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        <div className="min-h-dvh ">{children}</div>
        <div className="w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
