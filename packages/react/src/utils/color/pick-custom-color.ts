import type { XZKUICustomColor } from '@xsolla-zk-ui/react/types/theme';

function pickCustomColor<T extends string, R extends Record<string, unknown>>(
  color: T | XZKUICustomColor,
  target: R,
) {
  return color instanceof Object ? color.custom : target[color];
}

export default pickCustomColor;
