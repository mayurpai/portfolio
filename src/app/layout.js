import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <!-- <meta name="robots" content="noindex,nofollow"/> --> */}
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" /> */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
