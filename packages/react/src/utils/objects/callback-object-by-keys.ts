import type { CSSObject } from '@emotion/styled';

function callbackObjectByKeys<T extends ReadonlyArray<string | number>>(
  keys: T,
  cb: (idx: number, key: T[number]) => CSSObject,
) {
  return keys.reduce(
    (acc, curr, idx) => {
      acc[curr as T[number]] = cb(idx, curr);
      return acc;
    },
    {} as Record<T[number], CSSObject>,
  );
}

export default callbackObjectByKeys;
