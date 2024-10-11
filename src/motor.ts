import { partida } from "./modelo";

export function calculateRandomNumber(): number {
  partida.cardNumber = Math.floor(Math.random() * 10) + 1;
  return partida.cardNumber;
}
