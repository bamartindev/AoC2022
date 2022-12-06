import { chunk, copy2d } from '../shared/array';
import { openFileD } from '../shared/fs';
import { explode } from '../shared/string';

interface Instruction {
  count: number;
  from: number;
  to: number;
}

// expected input format: 'move 1 from 2 to 1'
const parseInstruction = (input: string): Instruction => {
  const [_a, count, _b, from, _c, to] = input.split(' ');
  return { count: parseInt(count, 10), from: parseInt(from, 10) - 1, to: parseInt(to, 10) - 1 };
};

const parseCrateRow = (input: string) => {
  const row = chunk(explode(input), 4).map((e) => {
    const val = e.filter((c) => !'[] '.includes(c)).join('');
    return val;
  });

  return row;
};

const rowsToColumns = (rows: string[][]): string[][] => {
  const cols: string[][] = [];
  const numColumns = rows[0].length;

  for (let i = 0; i < numColumns; i++) {
    const column = [];
    for (let j = 0; j < rows.length; j++) {
      const value = rows[j][i];
      if (value !== '') column.push(value);
    }
    column.reverse();
    cols.push(column);
  }

  return cols;
};

const applyInstruction = (crates: string[][], { count, from, to }: Instruction): string[][] => {
  for (let i = 0; i < count; i++) {
    const crate = crates[from].pop();
    crates[to].push(crate ?? 'error');
  }

  return crates;
};

const p1 = (crates: string[][], instructions: Instruction[]) => {
  // reduce instead?
  let result = crates;
  instructions.forEach((instruction) => {
    result = applyInstruction(result, instruction);
  });

  const str = result.map((arr) => arr.pop()).join('');

  console.log(`Day 5, Part 1: ${str}`);
};

const applyInstruction2 = (crates: string[][], { count, from, to }: Instruction): string[][] => {
  const i = crates[from].length - count;
  const moved = crates[from].slice(i);
  crates[from] = crates[from].slice(0, i);
  crates[to] = crates[to].concat(moved);

  return crates;
};

const p2 = (crates: string[][], instructions: Instruction[]) => {
  // reduce instead?
  let result = crates;
  instructions.forEach((instruction) => {
    result = applyInstruction2(result, instruction);
  });

  const str = result.map((arr) => arr.pop()).join('');

  console.log(`Day 5, Part 2: ${str}`);
};

export const run = () => {
  const input = openFileD('./src/day-05/input.txt', '\n');
  const i = input.indexOf('');
  const crates = rowsToColumns(input.slice(0, i - 1).map(parseCrateRow));
  const instructions = input.slice(i + 1).map(parseInstruction);

  p1(copy2d(crates), instructions);
  p2(copy2d(crates), instructions);
};
