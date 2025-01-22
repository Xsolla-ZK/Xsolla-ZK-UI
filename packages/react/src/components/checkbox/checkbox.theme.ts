import radius from '@xsolla-zk-ui/react/tokens/common/radius';
import size from '@xsolla-zk-ui/react/tokens/common/size';
import stroke from '@xsolla-zk-ui/react/tokens/common/stroke';
import callbackObjectByKeys from '@xsolla-zk-ui/react/utils/objects/callback-object-by-keys';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';

export const checkboxThemeSizes = [400, 500, 600] as const;

const baseSizes = {
  size: [size[100], size[200], size[300]],
  fontSize: [size[80], size[100], size[150]],
};

const iconSizes = {
  borderWidth: [stroke[100], stroke[100], stroke[200]],
  borderRadius: [radius[200], radius[300], radius[300]],
};

const checkboxTheme = (_mode: XZKUIThemeModeUnion) => ({
  sizes: callbackObjectByKeys(checkboxThemeSizes, (idx) => ({
    width: baseSizes.size[idx],
    height: baseSizes.size[idx],
    fontSize: baseSizes.fontSize[idx],
  })),
  icon: {
    sizes: callbackObjectByKeys(checkboxThemeSizes, (idx) => ({
      borderWidth: iconSizes.borderWidth[idx],
      borderRadius: iconSizes.borderRadius[idx],
    })),
  },
});

export default checkboxTheme;
