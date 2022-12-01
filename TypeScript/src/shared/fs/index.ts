import { readFileSync } from 'fs';

export const openFile = (filepath: string): string => {
  return readFileSync(filepath, 'utf8');
};

export const openFileD = (filepath: string, delim: string): string[] => {
  return readFileSync(filepath, 'utf8').split(delim);
};
