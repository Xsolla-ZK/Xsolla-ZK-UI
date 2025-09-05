export function objectDiff<A extends Record<string, unknown>, B extends Record<string, unknown>>(
  a: A,
  b: B,
) {
  const result: Partial<B> = {};

  for (const key of Object.keys(b)) {
    if (!(key in a) || a[key] !== b[key]) {
      result[key as keyof B] = b[key as keyof B];
    }
  }

  return result;
}
