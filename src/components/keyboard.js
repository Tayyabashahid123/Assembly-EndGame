import './keyboard.css';

export default function Keyboard() {

    const letters = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(65 + i) // 65 = 'A'
        );

  return (
    <div className="keyboard-container">
      {letters.map((letter, index) => (
        <button
          key={index}
          className="key-box"
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

