import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12s-2.727 8-10 8-10-8-10-8 2.727-8 10-8 10 8 10 8m-5 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Eye = memo(Icon);
