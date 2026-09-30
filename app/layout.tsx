import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#134471",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicadentaldoctoresrey.es"),
  title: {
    default: "Clínica Dental Doctores Rey | Dentista e Implantología en Valladolid",
    template: "%s | Clínica Dental Doctores Rey",
  },
  description:
    "Clínica dental de referencia en el centro de Valladolid con más de 30 años de experiencia. Especialistas en implantes dentales MIDI sin cirugía agresiva, estética dental, microabrasión y tecnología avanzada dirigida por el Dr. Antonio Rey Gil.",
  keywords: [
    "clínica dental Valladolid",
    "dentista Valladolid",
    "implantes dentales Valladolid",
    "implantes MIDI Valladolid",
    "Dr. Antonio Rey Gil",
    "Dra. Ana Rey",
    "Dr. Alberto Rey",
    "estética dental Valladolid",
    "microabrasión esmalte",
    "anestesia digital",
    "odontología neuromuscular Valladolid",
    "blanqueamiento dental Valladolid",
  ],
  authors: [
    { name: "Dr. Antonio Rey Gil" },
    { name: "Clínica Dental Doctores Rey" },
  ],
  creator: "Clínica Dental Doctores Rey",
  publisher: "Clínica Dental Doctores Rey",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clínica Dental Doctores Rey | Dentista e Implantología en Valladolid",
    description:
      "Más de 30 años cuidando tu sonrisa en Valladolid. Pioneros en implantes dentales MIDI sin cirugía invasiva y odontología de precisión.",
    url: "https://clinicadentaldoctoresrey.es",
    siteName: "Clínica Dental Doctores Rey",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Clínica Dental Doctores Rey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Dental Doctores Rey | Valladolid",
    description:
      "Clínica dental de referencia en Valladolid con más de 30 años de experiencia y técnica pionera de implantes MIDI.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-slate-900 min-h-screen flex flex-col selection:bg-brand-blue selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
