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
        d="m15 3 .204.01A2 2 0 0 1 17 5v2h5v14H2V7h5V5l.01-.204A2 2 0 0 1 8.797 3.01L9 3zM9 7h6V5H9z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Briefcase = memo(Icon);
