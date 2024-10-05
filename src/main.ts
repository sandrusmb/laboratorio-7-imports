/* import "./style.css";
 */
let score: number = 0;
const cardButton = document.querySelector(".card-button");
const stopButton = document.querySelector(".stop-button");
const resetButton = document.querySelector(".reset-button");
const container = document.querySelector(".card-container");
const containerSecondary = document.querySelector(".container-secondary");
let cardNumber: number = 0;
let isGameOver: boolean = false;
let isFirstCard: boolean = false;

function showScore() {
  let scoreContainer = document.querySelector(".score");
  if (
    scoreContainer !== null &&
    scoreContainer !== undefined &&
    scoreContainer instanceof HTMLParagraphElement
  ) {
    scoreContainer.textContent = "Puntuación:" + " " + score.toString();
  }
}

function calculateRandomNumber(): number {
  cardNumber = Math.floor(Math.random() * 10) + 1;
  return cardNumber;
}

function giveMeCard(): number {
  calculateRandomNumber();
  if (cardNumber > 7) {
    cardNumber += 2;
  }
  return cardNumber;
}

function showCard(card: number): string {
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

function printCard(cardImageUrl: string): void {
  if (
    container !== null &&
    container !== undefined &&
    container instanceof HTMLDivElement
  ) {
    if (!isFirstCard) {
      container.innerHTML = "";
      isFirstCard = true;
    }
    container.innerHTML += `<img class="card" src="${cardImageUrl}" alt="Carta"/>`;
  }
}

function calculateScore(card: number): void {
  let cardValue: number = card >= 10 ? 0.5 : card;

  score += cardValue;
  showScore();
  handleGameOver();
}

function handleGameOver(): void {
  setTimeout(() => {
    if (score > 7.5 && !isGameOver) {
      alert("Game over");
      disableCardButton();
      isGameOver = true;
    } else if (score === 7.5 && !isGameOver) {
      alert("¡Lo has clavado! ¡Enhorabuena!");
      disableCardButton();
      isGameOver = true;
    }
  }, 2000);
}

function showMessage() {
  if (score > 7.5) {
    alert("Game over");
  } else if (score < 4) {
    alert("Has sido muy conservador");
  } else if (score === 5) {
    alert("Te ha entrado el canguelo eh?");
  } else if (score === 6 || score == 7) {
    alert("Casi casi...");
  } else if (score === 7.5) {
    alert("¡Lo has clavado! ¡Enhorabuena!");
  }
}

function disableCardButton() {
  if (
    cardButton !== null &&
    cardButton !== undefined &&
    cardButton instanceof HTMLButtonElement
  ) {
    cardButton.setAttribute("disabled", "true");
  }
}

function enableCardButton() {
  if (
    cardButton !== null &&
    cardButton !== undefined &&
    cardButton instanceof HTMLButtonElement
  ) {
    cardButton.removeAttribute("disabled");
  }
}

function whatIsNext() {
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

function showInitialCardBack() {
  if (
    container !== null &&
    container !== undefined &&
    container instanceof HTMLDivElement
  ) {
    container.innerHTML = `<img class="card" src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg" alt="Carta boca abajo"/>`;
    isFirstCard = false;
  }
}

function reset() {
  score = 0;
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

  isGameOver = false;

  enableCardButton();
  showInitialCardBack();
}

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

enableCardButton();
showScore();
showInitialCardBack();
