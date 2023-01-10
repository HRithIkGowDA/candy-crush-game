import { candies } from "./candyData";

export const createBoard = (baordSize: number = 8) => //size of the board
  Array(baordSize * baordSize)
    .fill(null)
    .map(() => candies[Math.floor(Math.random() * candies.length)]);
