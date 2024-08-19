import BoilerFooter from "@/common/BoilerFooter";
import BoilerHeader from "@/common/BoilerHeader";
import BottomNavigation from "@/components/BottomNavigation";
import Head from "next/head";
import Navigation from "../components/Navigation";
import "./globals.scss";


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
                url: "/images/mayur_pai.ico",
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
                <link rel="icon" href="/images/mayur_pai.ico" type="image/x-icon" />
            </Head>
            <body><div className="main_app_container">
                <div className="app_conatiner">
                    <Navigation />
                    <BoilerHeader />
                    {children}
                    <BoilerFooter />
                    <BottomNavigation /></div>
            </div></body>
        </html>
    );
}
