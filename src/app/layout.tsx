import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WarriorProvider } from "@/components/WarriorProvider";
import { PwaRegister } from "@/components/PwaRegister";

const display = Barlow_Condensed({ variable: "--font-display", subsets: ["latin"], weight: ["600", "700", "800", "900"] });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), title: { default: "LMHS | Start Here. Go Anywhere.", template: "%s | LMHS" }, description: "Discover your interests, explore LMHS pathways, and build your Warrior Future.", manifest: "/manifest.webmanifest",
  icons: { icon: "/icon-192.png", apple: "/icon-192.png" },
  openGraph: { title: "LMHS | Start Here. Go Anywhere.", description: "Discover your interests, explore LMHS pathways, and build your Warrior Future.", type: "website", images: [{ url: "/og.png", width: 1536, height: 1024, alt: "LMHS Start Here. Go Anywhere." }] },
  twitter: { card: "summary_large_image", title: "LMHS | Start Here. Go Anywhere.", description: "Discover your interests, explore LMHS pathways, and build your Warrior Future.", images: ["/og.png"] },
};
export const viewport: Viewport = { themeColor: "#183a8f", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}><WarriorProvider><a className="skip-link" href="#main">Skip to content</a><Navigation/><main id="main">{children}</main><Footer/><PwaRegister/></WarriorProvider></body></html>;
}
