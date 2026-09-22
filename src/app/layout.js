import {
  Geo,
  Kode_Mono,
  Montserrat,
  Playwrite_BE_WAL_Guides,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

// Chaque police expose une variable --ff-* consommée par globals.css,
// qui en fait un utilitaire Tailwind (font-montserrat, font-geo, ...).

// font-montserrat — police par défaut du site (variable 100-900, normal + italique)
const montserrat = Montserrat({
  variable: "--ff-montserrat",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// font-geo — police display (400, normal + italique)
const geo = Geo({
  variable: "--ff-geo",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

// font-playwrite — police manuscrite (400 uniquement)
const playwrite = Playwrite_BE_WAL_Guides({
  variable: "--ff-playwrite",
  weight: "400",
  display: "swap",
});

// font-kode — police monospace (variable 400-700)
const kodeMono = Kode_Mono({
  variable: "--ff-kode",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bryangarrix.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Bryan Garrix - Développeur Full-Stack | React, Next.js, Django, FastAPI",
  description:
    "Portfolio de Bryan Garrix, développeur full-stack freelance spécialisé en React, Next.js, Python (Django, FastAPI) et API REST. Découvrez mes projets web et applications sur mesure.",
  keywords: [
    "Bryan Garrix",
    "Milson Fanoela Bryan",
    "Fanoela Bryan Milson",
    "Fanoela Bryan",
    "développeur full-stack",
    "développeur web",
    "développeur freelance",
    "portfolio développeur",
    "React",
    "Next.js",
    "Python",
    "Django",
    "FastAPI",
    "API REST",
    "Tailwind CSS",
    "shadcn/ui",
    "JavaScript",
    "TypeScript",
    "développeur frontend",
    "développeur backend",
    "développeur Madagascar",
    "UI/UX design",
  ],
  authors: [{ name: "Bryan Garrix" }],
  creator: "Bryan Garrix",
  openGraph: {
    title: "Bryan Garrix - Développeur Full-Stack",
    description:
      "Développeur full-stack freelance spécialisé en React, Next.js, Python (Django, FastAPI) et API REST.",
    type: "website",
    url: siteUrl,
    siteName: "Bryan Garrix Portfolio",
    locale: "fr_FR",
    images: [{ url: "/bg.png", width: 1200, height: 630, alt: "Bryan Garrix" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Garrix - Développeur Full-Stack",
    description:
      "Développeur full-stack freelance spécialisé en React, Next.js, Python (Django, FastAPI) et API REST.",
    images: ["/bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in your .env to enable GSC
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
    <head>
    <meta name="google-site-verification" content="CoZ964I0ggNRDIKWX_Gm3bYiFLU772pNUhkBKmoCiTA" />
    </head>
      <body
        className={`${montserrat.variable} ${geo.variable} ${playwrite.variable} ${kodeMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
