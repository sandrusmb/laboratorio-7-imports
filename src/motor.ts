import { partida } from "./modelo";
import { showScore, disableCardButton } from "./ui";

function calculateRandomNumber(): number {
  partida.cardNumber = Math.floor(Math.random() * 10) + 1;
  return partida.cardNumber;
}

export function giveMeCard(): number {
  calculateRandomNumber();
  if (partida.cardNumber > 7) {
    partida.cardNumber += 2;
  }
  return partida.cardNumber;
}

export function calculateScore(card: number): void {
  let cardValue: number = card >= 10 ? 0.5 : card;
  partida.score += cardValue;
  showScore();
  handleGameOver();
}

function handleGameOver(): void {
  setTimeout(() => {
    if (partida.score > 7.5 && partida.state === "PLAYING") {
      alert("Game over");
      disableCardButton();
      partida.state = "GAME_OVER";
    } else if (partida.score === 7.5 && partida.state === "PLAYING") {
      alert("¡Lo has clavado! ¡Enhorabuena!");
      disableCardButton();
      partida.state = "PERFECT_SCORE";
    }
  }, 2000);
}
