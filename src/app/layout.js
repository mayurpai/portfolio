import BoilerFooter from "@/common/BoilerFooter";
import BoilerHeader from "@/common/BoilerHeader";
import BackToTop from "@/components/BackToTop";
import Backdrop from "@/components/Backdrop";
import BottomNavigation from "@/components/BottomNavigation";
import ClickSparks from "@/components/ClickSparks";
import CustomCursor from "@/components/CustomCursor";
import MotionProvider from "@/components/MotionProvider";
import PageTransition from "@/components/PageTransition";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import Navigation from "../components/Navigation";
import "./globals.scss";

import Message from "@/sections/Message";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// Runs before first paint. Once the intro has been seen this session it's skipped, unless the visitor came back through the root site (then the portal just reopens).
const introScript = `try{var c=document.documentElement.classList,s=sessionStorage,h=+s.getItem("mp-intro-handoff"),m="intro";s.removeItem("mp-intro-handoff");if(matchMedia("(prefers-reduced-motion: reduce)").matches)m="skip";else if(s.getItem("mp-intro-seen"))m=Date.now()-h<15e3?"reveal":"skip";if(m=="skip")c.add("intro-skip");window.__mpIntro=m}catch(e){}`;

// Without JavaScript nothing would animate in, so show the server-rendered start states as final.
const noScriptStyles = `<style>[style*="opacity:0"]:not([style*="gradient"]),[style*="translateY(115%)"],nav[style]{opacity:1!important;transform:none!important;filter:none!important;clip-path:none!important}[class*="preloader"]{display:none!important}</style>`;


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
        <html lang="en" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: introScript }} />
                <noscript dangerouslySetInnerHTML={{ __html: noScriptStyles }} />
            </head>
            <body>
                <MotionProvider>
                    <Preloader />
                    <Backdrop />
                    <ScrollProgress />
                    <div className="main_app_container">
                        <div className="app_conatiner">
                            <Navigation />
                            <BoilerHeader />
                            {children}
                            <Message />
                            <BoilerFooter />
                            <BottomNavigation />
                        </div>
                    </div>
                    <BackToTop />
                    <PageTransition />
                    <ClickSparks />
                    <CustomCursor />
                </MotionProvider>
            </body>
        </html>
    );
}
