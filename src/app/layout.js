import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
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
    locale: "fr_FR",
    images: ["/bg.png"],
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
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
    <head>
    <meta name="google-site-verification" content="CoZ964I0ggNRDIKWX_Gm3bYiFLU772pNUhkBKmoCiTA" />
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
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
