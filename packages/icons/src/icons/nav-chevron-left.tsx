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
        d="m2.586 12 9.707 9.707 1.414-1.414L5.414 12l8.293-8.293-1.414-1.414z"
      />
    </SvgThemed>
  );
};

export const NavChevronLeft = memo(Icon);
