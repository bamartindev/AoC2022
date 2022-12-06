import { explode } from '../shared/string';
import { chunk, sum } from '../shared/array';
import { openFileD } from '../shared/fs';

const partition = (input: string[]): string[][] => {
  const midpoint = input.length / 2;
  return [input.slice(0, midpoint), input.slice(midpoint)];
};

const intersection = (first: string[], second: string[]): string[] => {
  return first.filter((c) => second.includes(c));
};

const values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const score = (input: string[]): number => {
  const [first, second] = partition(input);
  const common = intersection(first, second)[0];

  return values.indexOf(common) + 1;
};

const p1 = (input: string[]) => {
  const result = sum(input.map((l) => score(explode(l))));
  console.log(`Day 3, Part 1: ${result}`);
};

const score2 = (input: string[]): number => {
  const [first, second, third] = input.map(explode);
  const common = intersection(intersection(first, second), third)[0];

  return values.indexOf(common) + 1;
};

const p2 = (input: string[]) => {
  const result = sum(chunk(input, 3).map(score2));
  console.log(`Day 3, Part 2: ${result}`);
};

export const run = () => {
  const input = openFileD('./src/day-03/input.txt', '\n');
  p1(input);
  p2(input);
};
