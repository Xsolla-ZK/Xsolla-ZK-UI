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
        d="M16.626 3c1.423 0 2.776.576 3.772 1.656a5.52 5.52 0 0 1 0 7.776L12 21l-8.398-8.568a5.52 5.52 0 0 1 0-7.776l.07-.072a5.263 5.263 0 0 1 7.545.072l.783.792.854-.864A5.3 5.3 0 0 1 16.627 3"
      />
    </SvgThemed>
  );
};

export const Heart = memo(Icon);
