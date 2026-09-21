import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  metadataBase: new URL("https://diceys.example.com"), title: "Dicey's | Good Food Better Pours | Bengaluru",
  description: "Dicey's on Golf Club Road, Bengaluru — good food, better pours and nights worth remembering.",
  alternates: { canonical: "/" }, openGraph: { title: "Dicey's | Good Food Better Pours", description: "Good food, better pours and nights worth remembering.", type: "website", images: ["/images/hero/diceys-night.png"] },
  twitter: { card: "summary_large_image", title: "Dicey's | Good Food Better Pours", description: "Golf Club Road, Bengaluru." },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context":"https://schema.org", "@type":"Restaurant", name:"Dicey's", slogan:"Good Food Better Pours", address:{"@type":"PostalAddress",streetAddress:"Golf Club Road",addressLocality:"Bengaluru",addressCountry:"IN"}, telephone:["+917509306090","+917353906090"], servesCuisine:"Modern comfort food" };
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />{children}</body></html>;
}
