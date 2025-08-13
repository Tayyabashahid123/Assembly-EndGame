import "./letters.css"
import { useState } from 'react';

export default function Letters() {
  const [currentWord] = useState("REFACTOR");
  const letterElements = currentWord.split("");

  return (
    <section className="word">
      {letterElements.map((letter, index) => (
        <button key={index} className="letter-box"  >
          {letter}
        </button>
      ))}
    </section>
  );
}
