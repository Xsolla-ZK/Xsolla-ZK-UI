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
        d="m9 1-.5 3H8a4 4 0 0 0-4 4v14h16V8a4 4 0 0 0-4-4h-.5L15 1zm1.694 2-.166 1h2.944l-.166-1zM14 9h-4l1-2h2zM7 20v-3h6v1h2v-1h2v3zm10-4v-2H7v2z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Backpack = memo(Icon);
