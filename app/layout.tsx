import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Optimization",
  description: "make website load faster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
