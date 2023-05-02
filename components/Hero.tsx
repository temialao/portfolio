import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Temi👋",
      "I'm a Junior Software Engineer based in the UK",
      "Welcome to my page😄",
    ],
  });
  return <div>{text}</div>;
}

export default Hero;
