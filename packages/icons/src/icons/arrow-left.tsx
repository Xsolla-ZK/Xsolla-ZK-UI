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
        d="M12.707 4.707 6.414 11H19v2H6.414l6.293 6.293-1.414 1.414L2.586 12l8.707-8.707z"
      />
    </SvgThemed>
  );
};

export const ArrowLeft = memo(Icon);
