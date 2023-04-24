import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hello, I'm Temi Alao", "I'm a software developer"],
  });
  return <div>{text}</div>;
}

export default Hero;
