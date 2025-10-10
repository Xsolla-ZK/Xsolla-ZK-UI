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
        d="m13.293 5.293 1.414 1.414L9.414 12l5.293 5.293-1.414 1.414L6.586 12z"
      />
    </SvgThemed>
  );
};

export const ChevronLeft = memo(Icon);
