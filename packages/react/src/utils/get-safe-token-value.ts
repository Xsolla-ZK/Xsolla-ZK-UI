import { getTokenValue } from '@tamagui/core';
import type { Token } from '@tamagui/core';

export function getSafeTokenValue<T, R extends number>(token?: T) {
  if (token === undefined) return 0;

  if (typeof token === 'number') {
    return token;
  }

  return getTokenValue(token as Token) as R;
}
