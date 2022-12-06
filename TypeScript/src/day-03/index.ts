import { sum } from '../shared/array';
import { openFileD } from '../shared/fs';

const partition = (input: string[]): string[][] => {
  const midpoint = input.length / 2;
  return [input.slice(0, midpoint), input.slice(midpoint)];
};

const findCommon = (first: string[], second: string[]): string => {
  return first.filter((c) => second.includes(c))[0];
};

const values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const score = (input: string[]): number => {
  const [first, second] = partition(input);
  const common = findCommon(first, second);

  return values.indexOf(common) + 1;
};

const p1 = (input: string[][]) => {
  const result = sum(input.map(score));
  console.log(`Day 3, Part 1: ${result}`);
};

const p2 = () => {};

export const run = () => {
  const input = openFileD('./src/day-03/input.txt', '\n').map((l) => l.split(''));
  p1(input);
  p2();
};
