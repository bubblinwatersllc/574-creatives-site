import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  title: "574 Creatives — Bridging Creativity in the 574",
  description:
    "A movement for creatives in the 574. Connecting artists, entrepreneurs, and visionaries through culture, collaboration, and opportunity.",
  metadataBase: new URL("https://574creatives.org"),
  openGraph: {
    title: "574 Creatives — Bridging Creativity in the 574",
    description:
      "Connecting artists, entrepreneurs, and visionaries through culture, collaboration, and opportunity.",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "574 Creatives",
    description: "A movement for creatives in the 574."
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "574 Creatives"
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-ink-950 text-cream grain antialiased">
        {children}
      </body>
    </html>
  );
}
