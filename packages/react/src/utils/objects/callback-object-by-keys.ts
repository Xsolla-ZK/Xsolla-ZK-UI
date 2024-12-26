import type { SerializedStyles } from '@emotion/react';

function callbackObjectByKeys<T extends ReadonlyArray<string | number>>(
  keys: T,
  cb: (idx: number, key: T[number]) => SerializedStyles,
) {
  return keys.reduce(
    (acc, curr, idx) => {
      acc[curr as T[number]] = cb(idx, curr);
      return acc;
    },
    {} as Record<T[number], SerializedStyles>,
  );
}

export default callbackObjectByKeys;
