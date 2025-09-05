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
        d="M11.75 1 8 5l3.75 4L13 8.333l-1.308-2.325A6 6 0 1 1 6 12H4a8 8 0 1 0 7.684-7.994L13 1.666z"
      />
    </SvgThemed>
  );
};

export const Repeat = memo(Icon);
