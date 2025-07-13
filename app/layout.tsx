import type { Metadata } from "next";
import { Geist, Geist_Mono ,Anek_Telugu} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const AnekTelugu = Anek_Telugu({
  variable: "--font-caption",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Bryan Garrix , Fullstack developper",
  description: "Cree en 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable , AnekTelugu.className} ${geistMono.variable} antialiased`}
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
