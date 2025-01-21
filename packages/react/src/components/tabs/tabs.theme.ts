import size from '@xsolla-zk-ui/react/tokens/common/size';
import spacing from '@xsolla-zk-ui/react/tokens/common/spacing';
import typography from '@xsolla-zk-ui/react/tokens/common/typography';
import callbackObjectByKeys from '@xsolla-zk-ui/react/utils/objects/callback-object-by-keys';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';

export const tabsThemeSizes = [300, 400, 500, 600, 700] as const;

const base = {
  size: [size[300], size[400], size[500], size[600], size[700]],
  font: [
    typography.compact[200].accent,
    typography.compact[250].accent,
    typography.compact[350].accent,
    typography.compact[350].accent,
    typography.compact[350].accent,
  ],
  gap: [spacing[300], spacing[350], spacing[400], spacing[400], spacing[450]],
};

const tabsTheme = (_mode: XZKUIThemeModeUnion) => ({
  list: {
    sizes: callbackObjectByKeys(tabsThemeSizes, (idx) => ({
      gap: base.gap[idx],
    })),
  },
  tab: {
    sizes: callbackObjectByKeys(tabsThemeSizes, (idx) => ({
      minHeight: base.size[idx],
      minWidth: base.size[idx],
      font: base.font[idx],
    })),
  },
});

export default tabsTheme;
