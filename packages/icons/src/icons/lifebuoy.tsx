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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-6c.681 0 1.323-.17 1.884-.47l2.654 1.97.962-.962-1.97-2.654c.3-.561.47-1.203.47-1.884s-.17-1.323-.47-1.884l1.97-2.653-.962-.963-2.654 1.97A4 4 0 0 0 12 8c-.681 0-1.323.17-1.884.47L7.463 6.5l-.963.963 1.97 2.653C8.17 10.677 8 11.319 8 12s.17 1.323.47 1.884L6.5 16.539l.963.962 2.653-1.97c.561.3 1.203.47 1.884.47"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Lifebuoy = memo(Icon);
