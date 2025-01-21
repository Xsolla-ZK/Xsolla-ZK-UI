import radius from '@xsolla-zk-ui/react/tokens/common/radius';
import spacing from '@xsolla-zk-ui/react/tokens/common/spacing';
import callbackObjectByKeys from '@xsolla-zk-ui/react/utils/objects/callback-object-by-keys';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';

export const dropdownThemeSizes = [400, 500] as const;

const base = {
  padding: [spacing[100], spacing[200]],
  borderRadius: [radius[400], radius[500]],
};

const dropdownTheme = (_mode: XZKUIThemeModeUnion) => ({
  sizes: callbackObjectByKeys(dropdownThemeSizes, (idx) => ({
    padding: base.padding[idx],
    borderRadius: base.borderRadius[idx],
    [`[data-popper-placement^="bottom"] &`]: {
      marginTop: base.padding[idx],
    },
    [`[data-popper-placement^="top"] &`]: {
      marginBottom: base.padding[idx],
    },
    [`[data-popper-placement^="left"] &`]: {
      marginRight: base.padding[idx],
    },
    [`[data-popper-placement^="right"] &`]: {
      marginLeft: base.padding[idx],
    },
  })),
});

export default dropdownTheme;
