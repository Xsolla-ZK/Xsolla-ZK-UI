import radius from '@xsolla-zk-ui/react/tokens/common/radius';
import size from '@xsolla-zk-ui/react/tokens/common/size';
import spacing from '@xsolla-zk-ui/react/tokens/common/spacing';
import typography from '@xsolla-zk-ui/react/tokens/common/typography';
import callbackObjectByKeys from '@xsolla-zk-ui/react/utils/objects/callback-object-by-keys';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';

export const segmentedControlThemeSizes = [300, 400, 500, 600] as const;

const baseSizes = {
  borderRadius: [radius[400], radius[500], radius[550], radius[550]],
};

const controlSizes = {
  borderRadius: [radius[300], radius[400], radius[500], radius[500]],
  size: [size[300], size[400], size[500], size[600]],
  px: [spacing[200], spacing[250], spacing[300], spacing[350]],
  font: [
    typography.compact[200].accent,
    typography.compact[250].accent,
    typography.compact[350].accent,
    typography.compact[350].accent,
  ],
};

const segmentedControlTheme = (_mode: XZKUIThemeModeUnion) => ({
  sizes: callbackObjectByKeys(segmentedControlThemeSizes, (idx) => ({
    borderRadius: baseSizes.borderRadius[idx],
  })),
  control: {
    sizes: callbackObjectByKeys(segmentedControlThemeSizes, (idx) => ({
      minWidth: controlSizes.size[idx],
      height: controlSizes.size[idx],
      padding: `0 ${controlSizes.px[idx]}`,
      font: controlSizes.font[idx],
      ':first-of-type': {
        borderTopLeftRadius: controlSizes.borderRadius[idx],
        borderBottomLeftRadius: controlSizes.borderRadius[idx],
      },
      ':last-of-type': {
        borderTopRightRadius: controlSizes.borderRadius[idx],
        borderBottomRightRadius: controlSizes.borderRadius[idx],
      },
    })),
  },
});

export default segmentedControlTheme;
