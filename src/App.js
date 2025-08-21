import './App.css';
import { useState } from 'react';
import { words } from './words';
import Header from './components/Header';
import Status from './components/Status';
import Language from './components/language';
import Keyboard from './components/keyboard';
import Letters from './components/letters';
import NewGame from './components/newgame';
import Confetti from "react-confetti"

function App() {


  const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)].toUpperCase();
  };
  
  const [currentWord, setCurrentWord] = useState(getRandomWord());
  const [pressedKeys, setPressedKeys] = useState([]);
  const [wrongKeys, setWrongKeys] = useState([]);
  const [correctKeys, setCorrectKeys] = useState([]);


  function handleKeyPress(letter) {
    if (wrongKeys.length >= 8 || correctKeys.length === new Set(currentWord).size) {
      return; // stop if game already ended
    }

    // ✅ keep pressed keys unique
    setPressedKeys(prev => (prev.includes(letter) ? prev : [...prev, letter]));

    if (!currentWord.includes(letter)) {
      // ✅ unique wrong keys
      setWrongKeys(prev => (prev.includes(letter) ? prev : [...prev, letter]));
    } else {
      // ✅ unique correct keys
      setCorrectKeys(prev => (prev.includes(letter) ? prev : [...prev, letter]));
    }
  }

  function resetGame() {
    setPressedKeys([]);
    setWrongKeys([]);
    setCorrectKeys([]);
    setCurrentWord(getRandomWord());
  }

  return (
    <div className="App">
      {((correctKeys.length === new Set(currentWord).size) && (
        <Confetti/>
      ))}
      <Header />
      <Status correctKeys={correctKeys} wrongKeys={wrongKeys} currentWord={currentWord} />
      <Language wrongKeys={wrongKeys} />
      <Letters pressedKeys={pressedKeys} currentWord={currentWord} wrongKeys={wrongKeys} />
      <Keyboard
        onKeyPress={handleKeyPress}
        pressedKeys={pressedKeys}
        currentWord={currentWord}
      />

      {(correctKeys.length === new Set(currentWord).size || wrongKeys.length >= 8) && (
        <NewGame onReset={resetGame} />
      )}
    </div>
  );
}

export default App;
