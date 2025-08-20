import "./newgame.css";

export default function NewGame({ onReset }) {
  return (
    <button className="new-game" onClick={onReset}>
      New Game
    </button>
  );
}
