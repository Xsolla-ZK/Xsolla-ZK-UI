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
        d="M10.295 9.047 11 2h2l.705 7.047 6.455-2.913 1 1.732L15.41 12l5.75 4.134-1 1.732-6.455-2.913L13 22h-2l-.705-7.047-6.455 2.913-1-1.732L8.59 12 2.84 7.866l1-1.732z"
      />
    </SvgThemed>
  );
};

export const Asterisk = memo(Icon);
