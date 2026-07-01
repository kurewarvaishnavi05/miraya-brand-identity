import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import PremiumLoader from "@/components/ui/PremiumLoader";

export const metadata: Metadata = {
  title: "MIRAYA | Premium Luxury Indian Fashion",
  description: "Discover handcrafted luxury Indian ethnic wear. Shop premium lehengas, sarees, and anarkali suits designed for weddings, festivals, and elegant occasions.",
  keywords: "Luxury Indian Fashion, Designer Lehenga, Bridal Saree, Premium Ethnic Wear, Miraya Fashion, Sabyasachi Alternative, Luxury Ethnic",
  authors: [{ name: "Garima", url: "https://mirayafashion.com" }],
  creator: "MIRAYA",
  publisher: "MIRAYA by Garima",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "MIRAYA | Premium Luxury Indian Fashion",
    description: "Discover handcrafted luxury Indian ethnic wear.",
    url: "https://mirayafashion.com",
    siteName: "MIRAYA by Garima",
    images: [
      {
        url: "/hero-banner-v2.png",
        width: 1200,
        height: 630,
        alt: "MIRAYA Luxury Collection",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "MIRAYA | Premium Luxury Indian Fashion",
    description: "Discover handcrafted luxury Indian ethnic wear.",
    creator: "@mirayafashion",
    images: ["/hero-banner-v2.png"],
  },
};

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MIRAYA by Garima",
  url: "https://mirayafashion.com",
  description: "Premium Luxury Indian Fashion Brand",
  publisher: {
    "@type": "Organization",
    name: "MIRAYA",
    logo: {
      "@type": "ImageObject",
      url: "https://mirayafashion.com/logo.png"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-miraya-white text-miraya-black transition-colors duration-500 overflow-x-hidden">
        <ThemeProvider>
          <PremiumLoader />
          <AuthProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
