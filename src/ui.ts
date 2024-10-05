import {
  gameState,
  container,
  cardButton,
  containerSecondary,
  stopButton,
  resetButton,
} from "./modelo";

import { giveMeCard, calculateScore } from "./motor";

export function showScore() {
  let scoreContainer = document.querySelector(".score");
  if (
    scoreContainer !== null &&
    scoreContainer !== undefined &&
    scoreContainer instanceof HTMLParagraphElement
  ) {
    scoreContainer.textContent =
      "Puntuación:" + " " + gameState.score.toString();
  }
}

export function showCard(card: number): string {
  let cardImageUrl: string =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";

  if (
    container !== null &&
    container !== undefined &&
    container instanceof HTMLDivElement
  ) {
    switch (card) {
      case 1:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        break;
      case 2:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        break;
      case 3:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        break;
      case 4:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        break;
      case 5:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        break;
      case 6:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        break;
      case 7:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        break;
      case 10:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        break;
      case 11:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        break;
      case 12:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        break;
      default:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
        break;
    }
    return cardImageUrl;
  }
  return cardImageUrl;
}

export function printCard(cardImageUrl: string): void {
  if (
    container !== null &&
    container !== undefined &&
    container instanceof HTMLDivElement
  ) {
    if (!gameState.isFirstCard) {
      container.innerHTML = "";
      gameState.isFirstCard = true;
    }
    container.innerHTML += `<img class="card" src="${cardImageUrl}" alt="Carta"/>`;
  }
}

export function showMessage() {
  if (gameState.score > 7.5) {
    alert("Game over");
  } else if (gameState.score < 4) {
    alert("Has sido muy conservador");
  } else if (gameState.score === 5) {
    alert("Te ha entrado el canguelo eh?");
  } else if (gameState.score === 6 || gameState.score == 7) {
    alert("Casi casi...");
  } else if (gameState.score === 7.5) {
    alert("¡Lo has clavado! ¡Enhorabuena!");
  }
}

export function disableCardButton() {
  if (
    cardButton !== null &&
    cardButton !== undefined &&
    cardButton instanceof HTMLButtonElement
  ) {
    cardButton.setAttribute("disabled", "true");
  }
}

export function enableCardButton() {
  if (
    cardButton !== null &&
    cardButton !== undefined &&
    cardButton instanceof HTMLButtonElement
  ) {
    cardButton.removeAttribute("disabled");
  }
}

export function whatIsNext() {
  if (
    containerSecondary !== null &&
    containerSecondary !== undefined &&
    containerSecondary instanceof HTMLDivElement
  ) {
    containerSecondary.innerHTML = `<button class="button next-button">¿Qué hubiera pasado?</button>`;
    const nextButton = document.querySelector(".next-button");
    if (
      nextButton !== null &&
      nextButton !== undefined &&
      nextButton instanceof HTMLButtonElement
    ) {
      nextButton.addEventListener("click", () => {
        const card = giveMeCard();
        const cardImageUrl = showCard(card);
        printCard(cardImageUrl);
        calculateScore(card);
        setTimeout(showMessage, 1000);
        nextButton.setAttribute("disabled", "true");
      });
    }
  }
}

export function showInitialCardBack() {
  if (
    container !== null &&
    container !== undefined &&
    container instanceof HTMLDivElement
  ) {
    container.innerHTML = `<img class="card" src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg" alt="Carta boca abajo"/>`;
    gameState.isFirstCard = false;
  }
}

export function reset() {
  gameState.score = 0;
  showScore();

  if (
    container !== null &&
    container !== undefined &&
    container instanceof HTMLDivElement
  ) {
    container.innerHTML = "";
  }

  if (
    containerSecondary !== null &&
    containerSecondary !== undefined &&
    containerSecondary instanceof HTMLDivElement
  ) {
    containerSecondary.innerHTML = "";
  }

  gameState.isGameOver = false;

  enableCardButton();
  showInitialCardBack();
}

export function initializeGame() {
  enableCardButton();
  showScore();
  showInitialCardBack();
}

export function initializeEventListeners() {
  if (
    cardButton !== null &&
    cardButton !== undefined &&
    cardButton instanceof HTMLButtonElement
  ) {
    cardButton.addEventListener("click", () => {
      const card = giveMeCard();
      const cardImageUrl = showCard(card);
      printCard(cardImageUrl);
      calculateScore(card);
    });
  }

  if (
    stopButton !== null &&
    stopButton !== undefined &&
    stopButton instanceof HTMLButtonElement
  ) {
    stopButton.addEventListener("click", () => {
      showMessage();
      disableCardButton();
      whatIsNext();
    });
  }

  if (
    resetButton !== null &&
    resetButton !== undefined &&
    resetButton instanceof HTMLButtonElement
  ) {
    resetButton.addEventListener("click", reset);
  }
}
