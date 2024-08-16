"use client";
import BottomNavigation from "@/components/BottomNavigation";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Home from "./Home/page";
import LafzonKaJadugar from "./Lafzon-Ka-Jadugar/page";
import "./globals.scss";
//import { loadFull } from "tsparticles";
import BoilerFooter from "@/common/BoilerFooter";
import BoilerHeader from "@/common/BoilerHeader";
import { Particle } from "@/components/Particle";

function Index() {

    if (window.console && console.log) {
        console.log("%cHey there, curious coder! 🕵️‍♂️", "color: #f39c12; font-size: 18px; font-weight: bold;");
        console.log("%cLooks like you're diving into our code. 🕵️‍♀️✨", "color: #3498db; font-size: 16px;");
        console.log("%cRemember: great things are built with passion and creativity. Keep exploring! 💻🚀", "color: #2ecc71; font-size: 14px;");
        console.log("%cPS: Your developer just sent you some virtual high-fives! 👋", "color: #e74c3c; font-size: 14px;");
    }

    const [currentPage, setCurrentPage] = useState("/");

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    let pageComponent;

    switch (currentPage) {
        case "/":
            pageComponent = <Home />;
            break;
        case "/Lafzon-Ka-Jadugar":
            pageComponent = <LafzonKaJadugar />;
            break;
        default:
            pageComponent = null;
    }

    return (
        <div className="main_app_container">
            {/* <Particle/> */}
            <Navigation handlePageChange={handlePageChange} />
            <BoilerHeader />
            {pageComponent}
            <BoilerFooter />
            <BottomNavigation
                handlePageChange={handlePageChange}
                currentPage={currentPage}
            />
        </div>
    );
}

export default Index;
