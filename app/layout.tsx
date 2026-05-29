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

        <Script id="usersnap-widget" strategy="afterInteractive">
          {`
            window.onUsersnapLoad = function(api) {
              api.init();
            };

            var script = document.createElement('script');
            script.defer = 1;
            script.src = 'https://widget.usersnap.com/global/load/1c071d0c-6dad-48ef-b2c6-d67d87e4e8ca?onload=onUsersnapLoad';
            document.getElementsByTagName('head')[0].appendChild(script);
          `}
        </Script>
      </body>
    </html>
  );
}