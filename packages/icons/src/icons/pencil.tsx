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
        d="M18.4 10.028 13.973 5.6l1.185-1.185a2 2 0 0 1 2.828 0l1.6 1.6a2 2 0 0 1 0 2.83zM9.19 19.24l-5.168.738.738-5.167 8.505-8.505 4.429 4.43z"
      />
    </SvgThemed>
  );
};

export const Pencil = memo(Icon);
