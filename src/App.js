import './App.css';
import Header from './components/Header'
import Status from './components/Status'
import Language from './components/language';
import Keyboard  from './components/keyboard';
import Letters from './components/letters';

function App() {
  return (
    <div className="App">
      <Header/>
      <Status/>
      <Language/>
      <Letters/>
      <Keyboard/>
    </div>
  );
}

export default App;
