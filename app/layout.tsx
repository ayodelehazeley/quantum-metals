import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for a more industrial look
import "./globals.css";

// Inter is more robust for an industrial/corporate feel
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Quantum Metals Limited | Industrial Mineral Processing",
  description: "Positioning Sierra Leone as a critical hub in the global metals supply chain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-quantum-slate`}
      >
        {children}
      </body>
    </html>
  );
}