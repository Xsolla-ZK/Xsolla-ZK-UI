import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M12.933 17.481 16 14.414l5 5V21H3v-4.587l4.932-4.932z" />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="m21 16.586-5-5-2.933 2.932-5-6L3 13.587V3h18zM16 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Image = memo(Icon);
