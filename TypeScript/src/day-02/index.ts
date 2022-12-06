import { sum } from '../shared/array';
import { openFileD } from '../shared/fs';

interface Game {
  you: 'X' | 'Y' | 'Z';
  elf: 'A' | 'B' | 'C';
}

const parseGame = (raw: string): Game => {
  const [elf, you] = raw.split(' ');
  return { you, elf } as Game;
};

const scoring = { X: 1, Y: 2, Z: 3 };

const scoreGame = (game: Game): number => {
  let score = scoring[game.you];

  // TODO: Can turn this into a map probably and just score off that.
  // Rock: A X, Paper: B Y, Scissors: C Z
  if (game.you === 'X') {
    if (game.elf === 'A') score += 3;
    if (game.elf === 'C') score += 6;
  }

  if (game.you === 'Y') {
    if (game.elf === 'B') score += 3;
    if (game.elf === 'A') score += 6;
  }

  if (game.you === 'Z') {
    if (game.elf === 'C') score += 3;
    if (game.elf === 'B') score += 6;
  }

  return score;
};

const p1 = (games: Game[]) => {
  const total = games.map(scoreGame).reduce((a, b) => a + b, 0);
  console.log(`Day 2, Part 1: ${total}`);
};

const scoreGame2 = (game: Game): number => {
  let score = 0;

  // TODO: Any way to compress this down?
  switch (game.you) {
    // need to lose
    case 'X': {
      if (game.elf === 'A') score += 3;
      if (game.elf === 'B') score += 1;
      if (game.elf === 'C') score += 2;
      break;
    }
    // need to tie
    case 'Y': {
      if (game.elf === 'A') score += 1 + 3;
      if (game.elf === 'B') score += 2 + 3;
      if (game.elf === 'C') score += 3 + 3;
      break;
    }
    // need to win
    case 'Z': {
      if (game.elf === 'A') score += 2 + 6;
      if (game.elf === 'B') score += 3 + 6;
      if (game.elf === 'C') score += 1 + 6;
      break;
    }
  }

  return score;
};

const p2 = (games: Game[]) => {
  const total = sum(games.map(scoreGame2));
  console.log(`Day 2, Part 2: ${total}`);
};

export const run = () => {
  const games: Game[] = openFileD('./src/day-02/input.txt', '\n').map(parseGame);
  p1(games);
  p2(games);
};
