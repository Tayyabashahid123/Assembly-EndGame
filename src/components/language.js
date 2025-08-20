import './language.css';
import languages from '../languages.js';

export default function Language({ wrongKeys = [] }) {
  return (
    <div className="language-container">
      {languages.map((lang, index) => {
        const isLost = index < wrongKeys.length;

        return (
          <button
            key={index}
            className={`language-box ${isLost ? "faded" : ""}`}
            style={{
              backgroundColor: lang.backgroundColor,
              color: lang.color
            }}
          >
            <span className={`language-text ${isLost ? "faded" : ""}`}>
              {lang.name}
            </span>
            {isLost && <span className="overlay-skull">💀</span>}
          </button>

        );
      })}
    </div>
  );
}
