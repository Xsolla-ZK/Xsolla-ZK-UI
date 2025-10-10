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
        d="M20.777 6.629 10.4 19.472l-7.088-6.748 1.378-1.449 5.517 5.252 9.017-11.156z"
      />
    </SvgThemed>
  );
};

export const Checkmark = memo(Icon);
