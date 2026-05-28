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

        {/* Marker.io Integration */}
        <Script id="marker-io" strategy="afterInteractive">
          {`
            window.markerConfig = {
              project: '6a18089b15ec6c6cf18dd125',
              source: 'snippet'
            };

            !function(e,r,a){
              if(!e.__Marker){
                e.__Marker={};

                var t=[],n={__cs:t};

                [
                  "show",
                  "hide",
                  "isVisible",
                  "capture",
                  "cancelCapture",
                  "unload",
                  "reload",
                  "isExtensionInstalled",
                  "setReporter",
                  "clearReporter",
                  "setCustomData",
                  "on",
                  "off"
                ].forEach(function(e){
                  n[e]=function(){
                    var r=Array.prototype.slice.call(arguments);
                    r.unshift(e),t.push(r)
                  }
                });

                e.Marker=n;

                var s=r.createElement("script");
                s.async=1;
                s.src="https://edge.marker.io/latest/shim.js";

                var i=r.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(s,i)
              }
            }(window,document);
          `}
        </Script>
      </body>
    </html>
  );
}