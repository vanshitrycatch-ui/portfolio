import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanshi | Space Portfolio",
  description: "A premium futuristic digital universe portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}

        {/* Marker.io Config */}
        <Script id="marker-config">
          {`
            window.MarkerConfig = {
              // destination: "POR-1"
              project: "POR-1"
            };
          `}
        </Script>

        {/* Marker.io Script */}
        <Script
          src="https://edge.marker.io/latest/shim.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}