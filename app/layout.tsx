import type { Metadata } from "next";
import "./globals.css";
import "./academic.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/AcademicNav";
import Footer from "@/components/AcademicFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://iamajayprajapati.github.io"),
  title: "Ajay Prajapati | PhD Scholar - Machine Learning & Fractals",
  description:
    "Personal academic website of Ajay Prajapati, PhD Research Scholar at IIIT Vadodara, with research interests in Machine Learning, Deep Learning, Handwriting Analysis, and Fractals.",
  keywords: [
    "Ajay Prajapati",
    "PhD Scholar",
    "IIIT Vadodara",
    "Handwriting Analysis",
    "Machine Learning",
    "Deep Learning",
    "Fractals",
    "Research Scholar",
  ],
  authors: [{ name: "Ajay Prajapati" }],
  creator: "Ajay Prajapati",
  openGraph: {
    type: "website",
    url: "https://iamajayprajapati.github.io",
    title: "Ajay Prajapati | PhD Scholar - Machine Learning & Fractals",
    description:
      "Research Scholar at IIIT Vadodara with interests in Machine Learning, Deep Learning, Handwriting Analysis, and Fractals.",
    images: [{ url: "/ajay-profile.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Prajapati | PhD Scholar",
    description: "Research Scholar with interests in Machine Learning, Deep Learning, Handwriting Analysis, and Fractals.",
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
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
