import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.161 2.192a10.27 10.27 0 0 1 5.858.569 10.1 10.1 0 0 1 4.55 3.683c1.115 1.645 2.82 6.223-.56 9.556h-8.004v6c-2.005 0-3.832-.587-5.5-1.685a10.03 10.03 0 0 1-3.733-4.488 9.88 9.88 0 0 1-.577-5.778 9.96 9.96 0 0 1 2.775-5.12 10.2 10.2 0 0 1 5.191-2.737M5.001 10v3h2.001l1-3zm11.006 0 1 3h2.001v-3zM8.003 5v3h3.001l-1-3zm5.002 0 1 3h2.002V5z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Palette = memo(Icon);
