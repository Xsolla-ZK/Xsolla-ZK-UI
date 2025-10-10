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
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m1.885 6.47A4 4 0 0 0 12 8c-.681 0-1.323.17-1.885.47L7.463 6.5l-.963.963 1.97 2.652C8.17 10.677 8 11.32 8 12s.17 1.323.47 1.885L6.5 16.537l.963.963 2.652-1.97c.562.3 1.204.47 1.885.47s1.323-.17 1.885-.47l2.652 1.97.963-.963-1.97-2.652c.3-.562.47-1.204.47-1.885s-.17-1.323-.47-1.885l1.97-2.652-.963-.963z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Lifebuoy = memo(Icon);
