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
        d="M10.707 5.293 17.414 12l-6.707 6.707-1.414-1.414L14.586 12 9.293 6.707z"
      />
    </SvgThemed>
  );
};

export const ChevronRight = memo(Icon);
