export const createSet = <T extends number | string>(items: T[]): T[] =>
  Array.from(new Set(items));
