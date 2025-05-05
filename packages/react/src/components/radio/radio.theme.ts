import size from '@xsolla-zk/react/tokens/common/size';
import spacing from '@xsolla-zk/react/tokens/common/spacing';
import stroke from '@xsolla-zk/react/tokens/common/stroke';
import typography from '@xsolla-zk/react/tokens/common/typography';
import callbackObjectByKeys from '@xsolla-zk/react/utils/objects/callback-object-by-keys';
import type { XZKUIThemeModeUnion } from '@xsolla-zk/react/types/theme';

export const radioThemeSizes = [400, 500, 600] as const;

const baseSizes = {
  gap: [spacing[250], spacing[250], spacing[300]],
  font: [
    typography.compact[300].accent,
    typography.compact[300].accent,
    typography.compact[350].accent,
  ],
};

const boxSizes = {
  size: [size[100], size[200], size[300]],
  borderWidth: [stroke[100], stroke[100], stroke[200]],
};

const indicatorSizes = {
  size: [size[40], size[60], size[80]],
};

const radioTheme = (_mode: XZKUIThemeModeUnion) => ({
  sizes: callbackObjectByKeys(radioThemeSizes, (idx) => ({
    gap: baseSizes.gap[idx],
    font: baseSizes.font[idx],
  })),
  box: {
    sizes: callbackObjectByKeys(radioThemeSizes, (idx) => ({
      width: boxSizes.size[idx],
      height: boxSizes.size[idx],
      borderWidth: boxSizes.borderWidth[idx],
    })),
  },
  indicator: {
    sizes: callbackObjectByKeys(radioThemeSizes, (idx) => ({
      width: indicatorSizes.size[idx],
      height: indicatorSizes.size[idx],
    })),
  },
});

export default radioTheme;
