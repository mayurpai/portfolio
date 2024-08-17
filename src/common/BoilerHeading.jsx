import React from "react";
import TagsCreator from "@/components/TagsCreator";
import "../app/globals.scss";
import { createAnimatedText } from "./Animation";
import ScrambleText from "@/components/ScrambleText";

export default function BoilerHeading({ title, header }) {
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

  return (
    <>
      <TagsCreator
        tag={header}
        style={{ marginBottom: style.marginBottom, marginLeft: style.marginLeft }}
        bool={false}
      />
      {React.createElement(
        Tag,
        { className: "main_heading_container", style: { fontSize: style.fontSize }},
        <ul>{createAnimatedText(title)}</ul>
      )}
      <TagsCreator
        tag={header}
        style={{ marginTop: style.marginTop, marginLeft: style.marginLeft }}
        bool={true}
      />
    </>
  );
}
