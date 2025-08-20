import './Status.css';

export default function Status({ correctKeys, wrongKeys, currentWord }) {
  const uniqueWordLetters = new Set(currentWord).size;
  const hasWon = correctKeys.length === uniqueWordLetters && uniqueWordLetters > 0;
  const hasLost = wrongKeys.length === 8;

  return (
    <section
      className="game-status"
      style={{
        backgroundColor: hasWon ? "#10A95B" : hasLost ? "#EC5D49" : "#282726",
        minHeight: "60px",  
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "6px",
        margin: "10px auto",
        padding: "8px",
      }}
    >
      {hasWon ? (
        <>
          <h3>You win!</h3>
          <p>Well done! 🎉</p>
        </>
      ) : hasLost ? (
        <>
          <h3>Game over!</h3>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      ) : (
        <p style={{ opacity: 0 }}>placeholder</p> 
      )}
    </section>
  );
}
