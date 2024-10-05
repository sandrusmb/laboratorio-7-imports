import { gameState } from "./modelo";
import { showScore, disableCardButton } from "./ui";

function calculateRandomNumber(): number {
  gameState.cardNumber = Math.floor(Math.random() * 10) + 1;
  return gameState.cardNumber;
}

export function giveMeCard(): number {
  calculateRandomNumber();
  if (gameState.cardNumber > 7) {
    gameState.cardNumber += 2;
  }
  return gameState.cardNumber;
}

export function calculateScore(card: number): void {
  let cardValue: number = card >= 10 ? 0.5 : card;

  gameState.score += cardValue;
  showScore();
  handleGameOver();
}

function handleGameOver(): void {
  setTimeout(() => {
    if (gameState.score > 7.5 && !gameState.isGameOver) {
      alert("Game over");
      disableCardButton();
      gameState.isGameOver = true;
    } else if (gameState.score === 7.5 && !gameState.isGameOver) {
      alert("¡Lo has clavado! ¡Enhorabuena!");
      disableCardButton();
      gameState.isGameOver = true;
    }
  }, 2000);
}
