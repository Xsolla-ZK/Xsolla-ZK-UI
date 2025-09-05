import type { MediaPropKeys } from '@tamagui/core';

export type MediaUnion = MediaPropKeys | 'base';
export type MediaValue<T> = T | { [key in MediaUnion]?: T };
