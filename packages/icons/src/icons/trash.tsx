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
        d="m7 6 1-4h8l1 4h4v2h-2.125L18 22H6L5.125 8H3V6zm2 13-1-9h2v9zm2-9 1 9h1v-9zm4 9-1-9h2v9zM9 4h6v2H9z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Trash = memo(Icon);
