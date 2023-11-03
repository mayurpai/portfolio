"use client";
import BottomNavigation from "@/components/BottomNavigation";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Home from "./Home/page";
import LafzonKaJadugar from "./Lafzon-Ka-Jadugar/page";
import "./globals.scss";

function Index() {
  const [currentPage, setCurrentPage] = useState("/");

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="main_app_container">
      <Navigation />
      {currentPage === "/" ? <Home /> : <LafzonKaJadugar />}
      <BottomNavigation
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Index;
