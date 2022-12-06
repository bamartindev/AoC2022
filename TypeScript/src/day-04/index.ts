import { sum } from '../shared/array';
import { openFileD } from '../shared/fs';

interface SectionRange {
  min: number;
  max: number;
}

interface SectionPair {
  p1: SectionRange;
  p2: SectionRange;
}

// Expected input format: "2-4,6-8"
const parseSectionPairs = (input: string): SectionPair => {
  const [[a, b], [c, d]] = input.split(',').map((i) => i.split('-').map((e) => parseInt(e, 10)));

  return { p1: { min: a, max: b }, p2: { min: c, max: d } };
};

const between = (n: number, a: number, b: number): boolean => {
  return n >= a && n <= b;
};

const contains = ({ p1, p2 }: SectionPair): boolean => {
  return (between(p1.min, p2.min, p2.max) && between(p1.max, p2.min, p2.max)) || (between(p2.min, p1.min, p1.max) && between(p2.max, p1.min, p1.max));
};

const overlaps = ({ p1, p2 }: SectionPair): boolean => {
  return between(p1.min, p2.min, p2.max) || between(p1.max, p2.min, p2.max) || between(p2.min, p1.min, p1.max) || between(p2.max, p1.min, p1.max);
};

const p1 = (input: SectionPair[]) => {
  const count = sum(
    input.map((pair) => {
      return contains(pair) ? 1 : 0;
    }),
  );

  console.log(`Day 4, Part 1: ${count}`);
};

const p2 = (input: SectionPair[]) => {
  const count = sum(
    input.map((pair) => {
      return overlaps(pair) ? 1 : 0;
    }),
  );

  console.log(`Day 4, Part 2: ${count}`);
};

export const run = () => {
  const pairs = openFileD('./src/day-04/input.txt', '\n').map(parseSectionPairs);
  p1(pairs);
  p2(pairs);
};
