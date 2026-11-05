"use client"
import Marquee from "@/components/Marquee";
import Experience from "@/sections/Experience";
import Home from "@/sections/Home";
import Project from "@/sections/Project";

export default function Index() {
    return (
        <>
            <Home />
            <Marquee />
            <Experience />
            <Project />
        </>
    );
}
