import "./letters.css";

export default function Letters({ pressedKeys, currentWord, wrongKeys }) {
  const letterElements = currentWord.split("");
  const gameOver = wrongKeys.length >= 8; // all wrong guesses used

  return (
    <section className="word">
      {letterElements.map((letter, index) => {
        let color = "#323232"; // default gray

        if (pressedKeys.includes(letter)) {
          color = "#F9F4DA"; // correct guessed
        } else if (gameOver) {
          color = "#EC5D49"; // reveal remaining letters in red when game over
        }

        return (
          <button
            key={index}
            className="letter-box"
            style={{ color }}
          >
            {letter}
          </button>
        );
      })}
    </section>
  );
}
