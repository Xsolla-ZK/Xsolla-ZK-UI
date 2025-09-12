import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="m18 11 1 7H5l1-7H3v9h18v-9z" />
      <Path fill="currentColor" d="M13 14V6.29L16.167 8 17 6.5 12 2 7 6.5 7.833 8 11 6.29V14z" />
    </SvgThemed>
  );
};

export const Upload = memo(Icon);
