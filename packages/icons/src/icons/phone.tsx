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
        d="m16 2 3.536 3.536.707 4.95-9.9 9.899-4.95-.707-3.535-3.536L6.1 11.9l4.242 2.828 4.243-4.243-2.829-4.242z"
      />
    </SvgThemed>
  );
};

export const Phone = memo(Icon);
