export interface GameState {
  score: number;
  cardNumber: number;
  isGameOver: boolean;
  isFirstCard: boolean;
}

export const gameState: GameState = {
  score: 0,
  cardNumber: 0,
  isGameOver: false,
  isFirstCard: false,
};

export const cardButton = document.querySelector(".card-button");
export const stopButton = document.querySelector(".stop-button");
export const resetButton = document.querySelector(".reset-button");
export const container = document.querySelector(".card-container");
export const containerSecondary = document.querySelector(
  ".container-secondary"
);
