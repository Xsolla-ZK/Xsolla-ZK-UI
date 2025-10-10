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
        d="m12 4.586-6.707 6.707 1.414 1.414L12 7.414l5.293 5.293 1.414-1.414z"
      />
      <Path
        fill="currentColor"
        d="m12 11.586-6.707 6.707 1.414 1.414L12 14.414l5.293 5.293 1.414-1.414z"
      />
    </SvgThemed>
  );
};

export const DoubleArrowUp = memo(Icon);
