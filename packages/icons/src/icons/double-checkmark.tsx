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
        d="m7 11 5 7L23 7l-1-1-10 7-4-3zM6 13l.8-.56 1.983 2.777L6 18l-5-7 1-1z"
      />
      <Path fill="currentColor" d="m17 7-4.264 4.265-.716.5-2.054-1.54L16 6z" />
    </SvgThemed>
  );
};

export const DoubleCheckmark = memo(Icon);
