export const average = (arr: any[]) =>
  arr.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);
