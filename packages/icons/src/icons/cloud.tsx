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
        d="M18 11a4 4 0 0 1 0 8H6v-.027a4.5 4.5 0 0 1 .08-8.954A6.002 6.002 0 0 1 18 11"
      />
    </SvgThemed>
  );
};

export const Cloud = memo(Icon);
