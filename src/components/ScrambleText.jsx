import React, { useEffect, useState } from 'react';

const ScrambleText = ({ htmlString, duration = 3000, slowMotionFactor = 2 }) => {
  const [scrambledHtml, setScrambledHtml] = useState('');

  useEffect(() => {
    let interval;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(htmlString, 'text/html');
    const textNodes = [];
    const totalText = htmlString.replace(/<\/?[^>]+(>|$)/g, '');
    const totalLength = totalText.length;
    const revealInterval = Math.floor(duration / totalLength);
    let currentIndex = 0;

    // Extract text nodes from HTML
    const extractTextNodes = (node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
        textNodes.push({ node, originalText: node.textContent });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        node.childNodes.forEach(extractTextNodes);
      }
    };

    extractTextNodes(parsedHtml.body);

    const getRandomCharacter = () => characters[Math.floor(Math.random() * characters.length)];

    const scrambleText = () => {
      interval = setInterval(() => {
        if (currentIndex >= totalLength) {
          clearInterval(interval);
          return;
        }

        // Scramble text character by character
        textNodes.forEach(({ node, originalText }) => {
          let scrambledContent = '';
          for (let i = 0; i < originalText.length; i++) {
            if (i <= currentIndex) {
              scrambledContent += originalText[i];
            } else {
              scrambledContent += getRandomCharacter();
            }
          }
          node.textContent = scrambledContent;
        });

        // Update HTML with scrambled content
        setScrambledHtml(parsedHtml.body.innerHTML);

        currentIndex++;
      }, revealInterval * slowMotionFactor);
    };

    scrambleText();

    return () => {
      clearInterval(interval);
    };
  }, [htmlString, duration, slowMotionFactor]);

  return (
    <div dangerouslySetInnerHTML={{ __html: scrambledHtml }} />
  );
};

export default ScrambleText;
