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
        d="M6.5 2.474 12 3.75l5.5-1.276 1.645 5.401L23 12l-3.855 4.125-1.645 5.401L12 20.25l-5.5 1.276-1.645-5.401L1 12l3.855-4.125zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Settings = memo(Icon);
