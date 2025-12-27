import BoilerFooter from "@/common/BoilerFooter";
import BoilerHeader from "@/common/BoilerHeader";
import BottomNavigation from "@/components/BottomNavigation";
import Head from "next/head";
import Navigation from "../components/Navigation";
import "./globals.scss";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Message from "@/sections/Message";
config.autoAddCss = false;


export const metadata = {
    title: "Mayur Pai",
    description: "I'm a web wizard and coding aficionado passionate about cracking complex problems and building high-impact systems. A Software Engineer II at Nike, I work across full-stack engineering and Generative AI to build scalable, performance-driven products. Backed by a Bachelor's in Information Science from Sahyadri College of Engineering and Management, Mangalore, I thrive on curiosity, innovation, and pushing systems further. No finish line. Just builds.",
    applicationName: "Portfolio",
    referrer: "origin-when-cross-origin",
    keywords: [
        "Software Engineer II", "Nike", "Full Stack Engineer", "Generative AI", "Platform Engineering", "Cloud Engineering", "React.js", "Next.js", "JavaScript", "TypeScript", "Python", "FastAPI", "Kubernetes", "Distributed Systems", "Engineering Portfolio"
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

                <link rel="icon" href={`${process.env.NEXT_PUBLIC_LOGO}/images/mayur_pai.ico`} type="image/x-icon" />
            </Head>
            <body><div className="main_app_container">
                <div className="app_conatiner">
                    <Navigation />
                    <BoilerHeader />
                    {children}
                    <Message />
                    <BoilerFooter />
                    <BottomNavigation /></div>
            </div></body>
        </html>
    );
}
