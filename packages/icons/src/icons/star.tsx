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
        d="m12 2 2.586 7.44 7.875.16-6.276 4.76 2.281 7.54L12 17.4l-6.466 4.5 2.282-7.54L1.538 9.6l7.875-.16z"
      />
    </SvgThemed>
  );
};

export const Star = memo(Icon);
