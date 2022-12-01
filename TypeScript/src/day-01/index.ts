import { openFileD } from '../shared/fs';

interface Elf {
  food: number[];
  total: number;
}

const mkElf = (food: string[]): Elf => {
  const transformed = food.map((f) => parseInt(f, 10));
  return { food: transformed, total: transformed.reduce((acc, i) => acc + i, 0) };
};

const p1 = (elves: Elf[]) => {
  console.log('Day 1, part 1: ', elves[0].total);
};

const p2 = (elves: Elf[]) => {
  const total = elves[0].total + elves[1].total + elves[2].total;
  console.log('Day 1, part 2: ', total);
};

const chunkInput = (input: string[]): string[][] => {
  return input.reduce(
    (acc: string[][], c) => {
      if (c === '') {
        acc.push([]);
      } else {
        acc[acc.length - 1].push(c);
      }
      return acc;
    },
    [[]],
  );
};

export const run = () => {
  const input = openFileD('./src/day-01/input.txt', '\n');
  const elves = chunkInput(input)
    .map(mkElf)
    .sort((a, b) => b.total - a.total);

  p1(elves);
  p2(elves);
};
