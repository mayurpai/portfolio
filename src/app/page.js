"use client";
import BottomNavigation from "@/components/BottomNavigation";
import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import Navigation from "../components/Navigation";
import Home from "./Home/page";
import LafzonKaJadugar from "./Lafzon-Ka-Jadugar/page";
import "./globals.scss";
//import { loadFull } from "tsparticles";
import BoilerFooter from "@/common/BoilerFooter";
import BoilerHeader from "@/common/BoilerHeader";
import { loadSlim } from "tsparticles-slim";

function Index() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

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
      <Particles
        id="tsparticles"
        // style={{ zIndex: -1000 }}
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#161f27",
            },
          },
          fpsLimit: 240,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
            maxClickCount: 3,
          },
          particles: {
            color: {
              color: "#ffffff",
            },
            links: {
              value: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 500,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "none",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
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
