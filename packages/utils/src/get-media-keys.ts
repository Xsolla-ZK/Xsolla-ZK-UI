import { getMedia } from '@tamagui/core';

let validMediaKeys: Set<string> | null = null;
let mediaKeysArray: string[] | null = null;

export function getMediaKeys() {
  if (!validMediaKeys?.size || !mediaKeysArray?.length) {
    const media = getMedia();
    mediaKeysArray = Object.keys(media);
    validMediaKeys = new Set(['base']);

    for (const mediaKey of mediaKeysArray) {
      validMediaKeys.add(`$${mediaKey}`);
    }
  }

  return {
    validKeys: validMediaKeys,
    mediaKeys: mediaKeysArray,
  };
}
