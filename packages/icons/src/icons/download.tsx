import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M13 4v7.71L16.167 10 17 11.5 12 16l-5-4.5.833-1.5L11 11.71V4z" />
      <Path fill="currentColor" d="m18 11 1 7H5l1-7H3v9h18v-9z" />
    </SvgThemed>
  );
};

export const Download = memo(Icon);
