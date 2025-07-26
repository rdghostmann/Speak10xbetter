import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Speak10xBetter",
  description: "Master the Art of Public Speaking From stage fright to standing ovations. I help professionals, entrepreneurs, and leaders speak with confidence and impact.",
  icons: {
    icon: "/speaker-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        <link rel="icon" href="/speaker-favicon.png" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
