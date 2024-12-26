import { css } from '@emotion/react';
import size from '@xsolla-zk-ui/react/tokens/common/size';
import callbackObjectByKeys from '@xsolla-zk-ui/react/utils/objects/callback-object-by-keys';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';

export const richIconThemeSizes = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

const richIconTheme = (_mode: XZKUIThemeModeUnion) => ({
  sizes: callbackObjectByKeys(richIconThemeSizes, (_idx, key) =>
    css({
      fontSize: size[key],
    }),
  ),
});

export default richIconTheme;
