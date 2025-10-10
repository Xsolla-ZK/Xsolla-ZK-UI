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
        d="M17 2a3 3 0 1 1 0 6 3 3 0 0 1-1.6-.466l-7.435 4.004a3 3 0 0 1 0 .922l7.435 4.004a3 3 0 1 1-1.25 1.599l-7.137-3.844A2.98 2.98 0 0 1 5 15a3 3 0 1 1 0-6c.775 0 1.48.296 2.013.78l7.137-3.844A2.996 2.996 0 0 1 17 2"
      />
    </SvgThemed>
  );
};

export const Share = memo(Icon);
