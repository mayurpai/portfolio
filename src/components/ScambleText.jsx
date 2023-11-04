import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const characters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+="];

const move = keyframes`
  0% {
    opacity: 0;
    color: transparent;
    width: auto;
  }

  33% {
    opacity: 1;
    color: var(--theme_color_blue);
    width: auto;
    text-shadow: 0.2rem 0.2rem var(--theme_color_pink);
  }

  66% {
    opacity: 1;
    color: var(--theme_color_pink);
    width: auto;
    text-shadow: 0.2rem 0.2rem var(--theme_color_blue);
  }

  100% {
    opacity: 1;
    color: transparent;
    width: auto;
  }
`;

const AnimatedText = styled.div`
  animation: ${move} alternate-reverse 1s;
  animation-delay: ${(props) => props.delay}s;
`;

export function createAnimatedText(text) {
  // Split the text by newline (\n) and filter out empty strings and <br /> tags
  const paragraphs = text.replace(/<br\s*\/?>/g, "\n");
  const Newparagraphs = paragraphs
    .split(/(<br\s*\/?>|\n)/)
    .filter((item) => item.trim() !== "");


  return Newparagraphs.map((paragraph, index) => (
    <p key={index} delay={0.3 + index * 0.1}>
      {paragraph}
    </p>
  ));
}

const ScrambleText = ({ text }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const scramble = () => {
      const originalText = text.split("");
      let currentIndex = 0;

      const shuffleText = () => {
        if (currentIndex < originalText.length) {
          const shuffledText = [...originalText];
          shuffledText[currentIndex] = characters[Math.floor(Math.random() * characters.length)];
      
          setScrambledText(shuffledText.join(""));
          currentIndex++;
      
          setTimeout(shuffleText, 100); // Adjust animation speed here
        } else {
          setScrambledText(originalText.join(""));
      
          setTimeout(() => {
            setDisplayText(originalText.join(""));
          }, 100); // Restore original text after 5 seconds
        }
      };
      shuffleText();
    };

    scramble();
  }, [text]);

  return (
    <AnimatedText>
      {createAnimatedText(displayText || scrambledText)}
    </AnimatedText>
  );
};

export default ScrambleText;
