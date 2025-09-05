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
        d="m9 9 1 12h4l1-12zM16 21l1-12h4v12zM8 21 7 9H3v12zM21 3H3v4h18z"
      />
    </SvgThemed>
  );
};

export const DataTable = memo(Icon);
