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
    description: "I 'm a web wizard and coding aficionado, always on a quest to conquer the wildest realms of programming. Cracking complex challenges and blazing new trails is my forte. Teaching fuels my passion and keeps my skills razor-sharp and my mind always buzzing. Armed with a Bachelor's in Information Science from Sahyadri College of Engineering and Management, Mangalore, my credentials are as next-level as my tech game. I don't just keep up with trends—I set them! Currently, I'm architecting the next wave of generative AI innovations at GalaxE. Solutions an Endava Company. My love affair with computers ignited early and it's still blazing strong. Equipped with a powerhouse toolkit of languages, algorithms, and leadership flair, I'm here to make waves and build legacies.  There's always more to conquer, more bugs to squash, and more groundbreaking projects to craft. Let's crank up the tech magic to eleven!",
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
