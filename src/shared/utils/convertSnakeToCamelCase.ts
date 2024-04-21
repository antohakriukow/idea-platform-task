type CamelCase<S extends string> = S extends `${infer P}_${infer Q}${infer R}`
  ? `${P}${Uppercase<Q>}${CamelCase<R>}`
  : S;

type SnakeToCamelCase<T> = {
  [K in keyof T as CamelCase<K & string>]: T[K];
};

export const convertSnakeToCamelCase = <T extends Record<string, any>>(
  data: T[],
): SnakeToCamelCase<T>[] => {
  return data.map(
    (item: T) =>
      Object.keys(item).reduce((acc: Record<string, any>, key: string) => {
        const camelCaseKey = key.replace(/_([a-z])/g, (_, g) =>
          g.toUpperCase(),
        );
        acc[camelCaseKey] = item[key];
        return acc;
      }, {}) as SnakeToCamelCase<T>,
  );
};
