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
        d="M8.5 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
      />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 5.064A7.05 7.05 0 0 1 5.943 10.5H4.142a8 8 0 1 0 15.717 0h-1.802A7.05 7.05 0 0 1 12 7.064"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Face = memo(Icon);
