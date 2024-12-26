import { css } from '@emotion/react';
import size from '@xsolla-zk-ui/react/tokens/common/size';
import spacing from '@xsolla-zk-ui/react/tokens/common/spacing';
import typography from '@xsolla-zk-ui/react/tokens/common/typography';
import callbackObjectByKeys from '@xsolla-zk-ui/react/utils/objects/callback-object-by-keys';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';

export const pimpleThemeSizes = [200, 300, 400, 500, 600, 700] as const;

const baseSizes = {
  size: [size[40], size[80], size[100], size[150], size[200], size[300]],
  px: ['', spacing[50], spacing[100], spacing[100], spacing[150], spacing[200]],
  font: [
    '',
    typography.compact[150].accent,
    typography.compact[150].accent,
    typography.compact[200].accent,
    typography.compact[250].accent,
    typography.compact[300].accent,
  ],
};

const pimpleTheme = (_mode: XZKUIThemeModeUnion) => ({
  sizes: callbackObjectByKeys(pimpleThemeSizes, (idx) =>
    css({
      minWidth: baseSizes.size[idx],
      minHeight: baseSizes.size[idx],
      padding: `0 ${baseSizes.px[idx]}`,
      font: baseSizes.font[idx],
    }),
  ),
});

export default pimpleTheme;
