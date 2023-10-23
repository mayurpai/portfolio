import {
  La_Belle_Aurore,
  Montserrat,
  Roboto_Mono,
  Sigmar_One,
  Work_Sans,
  PT_Mono
} from "next/font/google";
import Head from "next/head";
import "./globals.scss";

const la_Belle_Aurore = La_Belle_Aurore({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const roboto_Mono = Roboto_Mono({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

const sigmar_One = Sigmar_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const work_Sans = Work_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const pt_mono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mayur Pai",
  description: "I am Mayur Pai B H, a web developer, and programmer.",
  applicationName: "Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "ReactJS",
    "NextJS",
    "SASS",
    "Portfolio",
  ],
  creator: "Mayur Pai",
  author: "Mayur Pai",
  googleSiteVerification: "rh1RLLiXrVeBTdNJYi9yEqzNYMHcW_ps05wOO0xfhT4",
  icons: {
    icon: [
      {
        url: `${process.env.NEXT_PUBLIC_FAVICON}/images/mayur_pai.ico`,
        type: "image/x-icon",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
      </Head>
      <body>{children}</body>
    </html>
  );
}
