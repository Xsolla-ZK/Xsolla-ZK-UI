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
        d="m3 6 9-.5 9 .5v2l-9 .5L3 8zM12 13.5 6 13v-2l6-.5 6 .5v2zM12 15.5l-2 .5v2l2 .5 2-.5v-2z"
      />
    </SvgThemed>
  );
};

export const SortDown = memo(Icon);
