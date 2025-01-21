import radius from '@xsolla-zk-ui/react/tokens/common/radius';
import size from '@xsolla-zk-ui/react/tokens/common/size';
import spacing from '@xsolla-zk-ui/react/tokens/common/spacing';
import typography from '@xsolla-zk-ui/react/tokens/common/typography';
import callbackObjectByKeys from '@xsolla-zk-ui/react/utils/objects/callback-object-by-keys';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';

export const inputThemeSizes = [400, 500, 600] as const;

const base = {
  font: [
    typography.compact[250].default,
    typography.compact[350].default,
    typography.compact[350].default,
  ],
  minHeight: [size[400], size[500], size[600]],
  borderRadius: [radius[400], radius[400], radius[500]],
  py: [spacing[300], spacing[300], spacing[300]],
  px: [spacing[300], spacing[350], spacing[350]],
};

const inputTheme = (_mode: XZKUIThemeModeUnion) => ({
  sizes: callbackObjectByKeys(inputThemeSizes, (idx) => ({
    minHeight: base.minHeight[idx],
    font: base.font[idx],
    padding: `${base.py[idx]} ${base.px[idx]}`,
    borderRadius: base.borderRadius[idx],
  })),
});

export default inputTheme;
