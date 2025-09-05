import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="m12 6 7-1v14l-7-1v3h9V3h-9z" />
      <Path fill="currentColor" d="m15 12-4.5 5-1.5-.833L10.71 13H3v-2h7.71L9 7.833 10.5 7z" />
    </SvgThemed>
  );
};

export const Login = memo(Icon);
