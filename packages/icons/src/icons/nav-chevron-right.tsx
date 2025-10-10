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
        d="m21.414 12-9.707 9.707-1.414-1.414L18.586 12l-8.293-8.293 1.414-1.414z"
      />
    </SvgThemed>
  );
};

export const NavChevronRight = memo(Icon);
