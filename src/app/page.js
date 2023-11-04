"use client";
import BottomNavigation from "@/components/BottomNavigation";
import Particle from "@/components/Particle";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Home from "./Home/page";
import LafzonKaJadugar from "./Lafzon-Ka-Jadugar/page";
import "./globals.scss";
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { particleConfigs } from "@/config/particle-config";

function Index() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const [currentPage, setCurrentPage] = useState("/");

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="main_app_container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{particleConfigs}}
      />
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
