import type { Theme } from '@emotion/react';
import type { XZKUICustomColor } from '@xsolla-zk-ui/react/types/theme';

function pickCustomColor<T extends Theme, C extends XZKUICustomColor>(
  { theme, mode }: T,
  color: C,
) {
  return typeof color === 'string' ? color : color({ theme, mode });
}

export default pickCustomColor;
