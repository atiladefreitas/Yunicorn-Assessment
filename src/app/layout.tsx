import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mario Lüddemann",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-segoe antialiased">{children}</body>
    </html>
  );
}
