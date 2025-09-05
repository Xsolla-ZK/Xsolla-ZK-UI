type DeepMerge<T, U> = {
  [K in keyof T | keyof U]: K extends keyof T
    ? K extends keyof U
      ? T[K] extends object
        ? U[K] extends object
          ? DeepMerge<T[K], U[K]>
          : T[K]
        : T[K] | U[K]
      : T[K]
    : K extends keyof U
      ? U[K]
      : never;
};

export function deepMerge<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.entries(obj2).reduce(
    (acc, [key, value]) => {
      const typedKey = key as keyof (T & U);
      const accValue = acc[typedKey];

      if (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        typeof accValue === 'object' &&
        accValue !== null &&
        !Array.isArray(accValue)
      ) {
        acc[typedKey] = deepMerge(accValue, value) as (typeof acc)[typeof typedKey];
      } else {
        acc[typedKey] = value as (typeof acc)[typeof typedKey];
      }
      return acc;
    },
    { ...obj1 } as DeepMerge<T, U>,
  );
}
