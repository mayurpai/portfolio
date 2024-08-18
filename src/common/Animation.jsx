import styled, { keyframes } from "styled-components";

const move = keyframes`
0% {
    opacity: 0;
    color: transparent;
    width: auto;
  }

  33% {
    opacity: 1;
    color: var(--blue);
    width: auto;
    text-shadow: 0.2rem 0.2rem var(--pink);
  }

  66% {
    opacity: 1;
    color: var(--pink);
    width: auto;
    text-shadow: 0.2rem 0.2rem var(--blue);
  }

  100% {
    opacity: 1;
    color: transparent;
    width: auto;
  }`;

const AnimatedText = styled.li`
  animation: ${move} alternate-reverse 1s;
  animation-delay: ${(props) => props.delay}s;
`;

export function createAnimatedText(text) {
  return text.split("").map((char, index) => (
    <AnimatedText key={index} delay={0.3 + index * 0.1}>
      {char}
    </AnimatedText>
  ));
}
