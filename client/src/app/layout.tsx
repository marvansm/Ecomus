import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import MainLayout from "@/Layout";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ecomus",
  description: "E-commerce platform",
};

import { Providers } from "./Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} antialiased`}>
        <Providers>
          <MainLayout>
            <main>{children}</main>
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
