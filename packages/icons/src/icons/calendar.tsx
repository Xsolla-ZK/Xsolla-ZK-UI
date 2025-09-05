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
        d="M2 22 3 4h3V2h2v2h8V2h2v2h3l1 18zm17-12H5v10h14z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Calendar = memo(Icon);
