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
        d="m13 8 1-1V5l-1-1h-2l-1 1v2l1 1zM13 10l1 1v2l-1 1h-2l-1-1v-2l1-1zM13 20l1-1v-2l-1-1h-2l-1 1v2l1 1z"
      />
    </SvgThemed>
  );
};

export const MoreVertical = memo(Icon);
