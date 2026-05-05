import type { Metadata, Viewport } from "next";
import { Outfit, Sora, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Chaitanya Kumar Sahu | Full-Stack Developer",
  description: "Full-Stack Developer & Security-Focused Engineer. Open to fresher / junior engineering roles. Portfolio showcasing projects, certifications, and skills.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Chaitanya Kumar Sahu | Full-Stack Developer",
    description: "Full-Stack Developer & Security-Focused Engineer — Open to Opportunities",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${sora.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
