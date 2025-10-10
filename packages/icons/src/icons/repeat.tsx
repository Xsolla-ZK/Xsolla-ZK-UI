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
        d="M12 2v3a7 7 0 1 1-7 7h2a5.002 5.002 0 0 0 5.976 4.904A5 5 0 0 0 12 7v3L7 6z"
      />
    </SvgThemed>
  );
};

export const Repeat = memo(Icon);
