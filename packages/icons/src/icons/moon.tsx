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
        d="M9.724 2.263A10 10 0 0 0 9 6c0 5.523 4.477 10 10 10 .783 0 1.544-.094 2.275-.264C19.795 19.408 16.202 22 12 22 6.477 22 2 17.523 2 12c0-4.74 3.298-8.707 7.724-9.737"
      />
    </SvgThemed>
  );
};

export const Moon = memo(Icon);
