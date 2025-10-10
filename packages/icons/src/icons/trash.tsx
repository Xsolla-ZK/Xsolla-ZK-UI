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
        d="M22 5v2h-3v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7H2V5zM9 18h2V9H9zm4 0h2V9h-2z"
        clipRule="evenodd"
      />
      <Path fill="currentColor" d="M16 4H8V2h8z" />
    </SvgThemed>
  );
};

export const Trash = memo(Icon);
