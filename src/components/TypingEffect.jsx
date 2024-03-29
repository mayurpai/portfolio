"use client";
import React, { useEffect, useState } from "react";

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 0); // Adjust the typing speed as needed
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text]);

  const parsedText = displayText.replace(/<br\s*\/?>/g, "\n");

  return (
    <p>
      {parsedText.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < parsedText.split("\n").length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  );
};

export default TypingEffect;
