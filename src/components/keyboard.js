import './keyboard.css';

export default function Keyboard({ onKeyPress, pressedKeys, currentWord }) {
  const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i) // A–Z
  );

  return (
    <div className="keyboard-container">
      {letters.map((letter, index) => {
        let bgColor = "#FCBA29"; 

        if (pressedKeys.includes(letter)) {
          bgColor = currentWord.includes(letter) ? "#10A95B" : "#EC5D49"; 
        }

        return (
          <button
            key={index}
            className="key-box"
            onClick={() => onKeyPress(letter)}
            style={{ backgroundColor: bgColor, color: "#323232" }}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
