import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServiceDock } from "@/components/ServiceDock";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "DentalClinic Demo",
    template: "%s · DentalClinic Demo",
  },
  description:
    "Site demonstrativ pentru o clinică stomatologică: Fast & Fixed, implantologie, estetică, ortodonție și celelalte specialități.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full font-sans text-slate-900">
        <Header />
        <main className="flex-1 pt-4">{children}</main>
        <Footer />
        <ServiceDock />
      </body>
    </html>
  );
}
