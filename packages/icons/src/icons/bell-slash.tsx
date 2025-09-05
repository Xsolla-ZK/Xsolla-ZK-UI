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
        d="m7 2-.478 3.108L18.414 17H22v-4l-3.333-.167L17 2zM13.586 17l5.707 5.707 1.414-1.414-18-18-1.414 1.414 4.585 4.585-.443 2.88L2 12v5z"
      />
      <Path fill="currentColor" d="m9 18 6 1v3H9z" />
    </SvgThemed>
  );
};

export const BellSlash = memo(Icon);
