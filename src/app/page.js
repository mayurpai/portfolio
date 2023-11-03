"use client";
import { useRouter } from "next/navigation";

import BottomNavigation from "@/components/BottomNavigation";
import Navigation from "../components/Navigation";
import Home from "./Home/page";
import "./globals.scss";
import LafzonKaJadugar from "./Lafzon-Ka-Jadugar/page";

export default function Index() {
  const router = useRouter();

  return (
    <div className="main_app_container">
      <Navigation />
      {router.pathname === "/" ? (
        <Home />
      ) : (
        <LafzonKaJadugar />
      )}
      <BottomNavigation />
    </div>
  );
}
