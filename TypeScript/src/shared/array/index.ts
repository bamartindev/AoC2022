export const sum = (nums: number[]): number => {
  return nums.reduce((a, b) => a + b, 0);
};

export const chunk = <T>(arr: T[], chunkSize: number): T[][] => {
  return arr.reduce((acc: T[][], e, i) => {
    if (i % chunkSize === 0) acc.push([]);
    acc[Math.floor(i / chunkSize)].push(e);
    return acc;
  }, []);
};

export const copy2d = <T>(arr: T[][]): T[][] => {
  return arr.map((arr) => arr.slice());
};
