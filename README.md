# Code Hangman

Awesome you've landed here! This is **Code Hangman**, a React-based word-guess game intentionally styled and themed for developers. Built with frontend magic (React, JavaScript, CSS), it’s all about guessing the secret word before too many mistakes “kill off” your language lives (programming-style!).

Live Demo: https://codehangman.netlify.app/  

---

##  How to Play

- Press a letter (via on-screen buttons or your keyboard).
- Correct letters fill in the hidden word.
- Wrong guesses "knock out" a language tile; get 8 wrong, and it's game over.
- Guess the full word correctly before all lives are lost to win—celebrate with confetti!

---

## ​ Tech Stack

- **React** — UI & state management  
- **CSS Modules / CSS** — Styling for clean, consistent visuals  
- **react-confetti** — Fun confetti animation on win  
- **Netlify** — Hosting the live app  

---


---

##  Installation & Local Setup

1. **Clone the repo:**
   ```
   git clone https://github.com/yourusername/code-hangman.git
   cd code-hangman
   ```
   
2. **Install dependencies:**

    ```
    npm install
    npm start
    ```
Your game launches at http://localhost:3000


##  Gameplay Features

Unique word per game: Chosen randomly from a curated word list.

Unique key tracking: Prevents duplicate guesses.

##  Visual feedback:

Correct guess → reveals in hidden word.

Wrong guess → language tile fades + skull overlay.

Game Over:

Win = all letters revealed → confetti celebration.

Loss = 8 wrong guesses → full reveal + reset option.


