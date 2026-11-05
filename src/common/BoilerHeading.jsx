"use client";
import TagsCreator from "@/components/TagsCreator";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "../app/globals.scss";
import { AnimatedText } from "./Animation";
import { useStageReady } from "./stage";

// Giant outlined copy of the title that slides sideways as the section scrolls by.
function GhostWord({ text }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["12%", "-30%"]);

  return (
    <motion.span ref={ref} className="heading_ghost" style={{ x, y: "-50%" }} aria-hidden="true">
      {text}
    </motion.span>
  );
}

export default function BoilerHeading({ title, header, section = false, children }) {
  // Define the allowed header tags, their font sizes, and margin styles
  const headingStyles = {
    h1: { fontSize: "5.5rem", marginTop: "-1rem", marginBottom: "-2rem", marginLeft: "6rem" },
    h2: { fontSize: "3.5rem", marginTop: "-0.75rem", marginBottom: "-1.45rem", marginLeft: "6rem" },
    h3: { fontSize: "1.75rem", marginTop: "1.5rem", marginBottom: "0.5rem", marginLeft: "6rem" },
    h4: { fontSize: "1.5rem", marginTop: "1.25rem", marginBottom: "0.25rem", marginLeft: "6rem" },
    h5: { fontSize: "1.25rem", marginTop: "1rem", marginBottom: "0.2rem", marginLeft: "6rem" },
    h6: { fontSize: "1rem", marginTop: "0.75rem", marginBottom: "0.1rem", marginLeft: "6rem" }
  };

  // Validate the header prop and default to "h1" if invalid
  const Tag = headingStyles[header] ? header : "h1";
  const style = headingStyles[Tag] || headingStyles.h1; // Default style to h1 if header is invalid
  const ready = useStageReady();
  // Section headings reveal on scroll; a page title plays as soon as the intro lifts.
  const isPageTitle = Tag === "h1" && !section;

  return (
    <div className="heading_block">
      {!isPageTitle && <GhostWord text={title} />}
      <TagsCreator
        tag={header}
        style={{ marginBottom: style.marginBottom, marginLeft: style.marginLeft }}
        bool={false}
      />
      {React.createElement(
        Tag,
        { className: "main_heading_container", style: { fontSize: style.fontSize }, "aria-label": title },
        <AnimatedText text={title} play={isPageTitle ? ready : undefined} />
      )}
      {children}
      <TagsCreator
        tag={header}
        style={{ marginTop: children ? "0.3rem" : style.marginTop, marginLeft: style.marginLeft }}
        bool={true}
        delay={0.35}
      />
    </div>
  );
}
