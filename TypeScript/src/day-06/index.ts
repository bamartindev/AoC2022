import { openFile } from '../shared/fs';

const unique = (input: string[]): boolean => {
  return new Set(input).size === input.length;
};

const findMarker = (input: string[], distinctCount: number): number => {
  for (let i = 0; i < input.length - distinctCount; i++) {
    const sequence = input.slice(i, i + distinctCount);
    if (unique(sequence)) {
      return i + distinctCount;
    }
  }

  return -1;
};

const p1 = (input: string[]) => {
  const result = findMarker(input, 4);
  console.log(`Day 6, Part 1: ${result}`);
};

const p2 = (input: string[]) => {
  const result = findMarker(input, 14);
  console.log(`Day 6, Part 1: ${result}`);
};

export const run = () => {
  const input = openFile('./src/day-06/input.txt').split('');
  p1(input);
  p2(input);
};
