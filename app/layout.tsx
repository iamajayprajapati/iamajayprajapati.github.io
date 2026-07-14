import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "Ajay Prajapati | PhD Scholar – AI, Handwriting Analysis & Computer Vision",
  description:
    "Personal academic website of Ajay Prajapati, PhD Research Scholar at IIIT Vadodara, specializing in Handwriting Analysis, Deep Learning, Computer Vision, Explainable AI, OCR, and Machine Learning.",
  keywords: [
    "Ajay Prajapati",
    "PhD Scholar",
    "IIIT Vadodara",
    "Handwriting Analysis",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Explainable AI",
    "OCR",
    "Research Scholar",
  ],
  authors: [{ name: "Ajay Prajapati" }],
  creator: "Ajay Prajapati",
  openGraph: {
    type: "website",
    url: "https://ajayprajapati.dev",
    title: "Ajay Prajapati | PhD Scholar – AI & Computer Vision",
    description:
      "Research Scholar at IIIT Vadodara specializing in Handwriting Analysis, Computer Vision, and Explainable AI.",
    images: [{ url: "/ajay-profile.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Prajapati | PhD Scholar",
    description: "Research Scholar specializing in AI, Handwriting Analysis, and Computer Vision.",
    images: ["/ajay-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <CursorGlow />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
