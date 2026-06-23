import type { Metadata } from "next";
import { Encode_Sans, Encode_Sans_Condensed, Encode_Sans_Expanded } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const encodeSans = Encode_Sans({
  variable: "--font-encode-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const encodeSansCondensed = Encode_Sans_Condensed({
  variable: "--font-encode-sans-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const encodeSansExpanded = Encode_Sans_Expanded({
  variable: "--font-encode-sans-expanded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GeoSint | Decisiones Fundamentadas en Inteligencia Ambiental",
  description: "Análisis Ambiental Autogestivo para Consultoras. Transforma la información en acción con precisión, autonomía y visualización 3D mediante DIM Data Bus.",
  keywords: ["GeoSint", "DIM Data Bus", "análisis ambiental", "consultoría hídrica", "vulnerabilidad de acuíferos", "plumas de contaminantes", "geomorfología", "decisiones fundamentadas"],
  authors: [{ name: "GeoSint" }],
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${encodeSans.variable} ${encodeSansCondensed.variable} ${encodeSansExpanded.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-neutral-bg text-neutral-text">
        {children}
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
    </html>
  );
}
