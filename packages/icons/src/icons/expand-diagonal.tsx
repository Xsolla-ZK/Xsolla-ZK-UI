import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M22 2v11l-4.793-4.793-9 9L13 22H2V11l4.793 4.793 9-9L11 2z" />
    </SvgThemed>
  );
};

export const ExpandDiagonal = memo(Icon);
