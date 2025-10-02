import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "",
  // title: "Speak10xBetter",
  description:
    "Master the Art of Public Speaking. From stage fright to standing ovations — I help professionals, entrepreneurs, and leaders speak with confidence and impact.",
  keywords: [
    "public speaking",
    "overcome stage fright",
    "speak with confidence",
    "communication skills",
    "leadership speaking",
    "presentation skills",
    "entrepreneur speaking",
    "professional communication",
    "speak better",
    "confidence on stage",
    "public speaking coach",
    "public speaking training",
    "speech coaching",
    "presentation skills training",
    "overcome stage fright",
    "virtual presentation coaching",
    "executive presentation coach",
    "TEDx coaching",
    "leadership communication coach",
    "pitch coaching for startups",
    "voice coaching for speakers",
    "body language for presenters",
    "storytelling for business",
    "sales presentation training",
    "interview presentation skills",
    "online public speaking course",
    "public speaking workshops",
    "corporate communication training",
    "confidence building for speakers",
    "public speaking for non-native English speakers",
    "keynote speaker coaching",
    "speechwriting service",
    "presentation design & slide training",
    "crisis communication coaching",
    "media interview training",
    "cross-cultural communication training",
    "public speaking tips for beginners",
    "advanced presentation techniques",
    "breath control for speakers",
    "how to stop voice cracking",
    "pitch deck presentation coaching",
    "virtual meeting presentation skills",
    "body language training for leaders",
    "engaging storytelling techniques",
    "presentation coaching for executives",
    "public speaking coach near me",
    "online speech coach global",
    "speak confidently on camera",
    "professional voice training",
    "persuasive communication skills",
  ],
  icons: {
    icon: "/speaker-favicon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/speaker-favicon" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased invisible`} cz-shortcut-listen="true">
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
