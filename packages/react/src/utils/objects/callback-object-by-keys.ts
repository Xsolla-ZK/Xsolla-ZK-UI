import type { SerializedStyles } from '@emotion/react';

function callbackObjectByKeys<T extends readonly string[]>(
  keys: T,
  cb: (idx: number) => SerializedStyles,
) {
  return keys.reduce(
    (acc, curr, idx) => {
      acc[curr as T[number]] = cb(idx);
      return acc;
    },
    {} as Record<T[number], SerializedStyles>,
  );
}

export default callbackObjectByKeys;
