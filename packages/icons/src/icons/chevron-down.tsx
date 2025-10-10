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
        d="m12 16.414 6.707-6.707-1.414-1.414L12 13.586 6.707 8.293 5.293 9.707z"
      />
    </SvgThemed>
  );
};

export const ChevronDown = memo(Icon);
