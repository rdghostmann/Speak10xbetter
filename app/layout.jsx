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
  title: "Speak10xBetter",
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
  ],
  icons: {
    icon: "/speaker-for.png",
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
        <ScrollToTopButton />
      </body>
    </html>
  );
}

// import { Roboto, EB_Garamond } from "next/font/google";
// import "./globals.css";
// import Head from "next/head";

// const roboto = Roboto({
//   weight: ["400", "500", "700"],
//   subsets: ["latin"],
//   variable: "--font-roboto",
// });

// const ebGaramond = EB_Garamond({ subsets: ["latin"] });


// export const metadata = {
//   title: "Speak10xBetter",
//   description:
//     "Master the Art of Public Speaking From stage fright to standing ovations. I help professionals, entrepreneurs, and leaders speak with confidence and impact.",
//   icons: {
//     icon: "/speaker-favicon.png",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Head>
//         <link rel="icon" href="/speaker-favicon.png" />
//       </Head>
//       <body className={`${roboto.variable} ${ebGaramond.className} font-sans antialiased`} cz-shortcut-listen="true">
//         {children}
//         <ScrollToTopButton />
//       </body>
//     </html>
//   );
// }

