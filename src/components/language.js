import './language.css';
import languages from '../languages.js';

export default function Language() {
  return (
    <div className="language-container">
      {languages.map((lang, index) => (
        <button
          key={index}
          className="language-box"
          style={{
            backgroundColor: lang.backgroundColor,
            color: lang.color
          }}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}
