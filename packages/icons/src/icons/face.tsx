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
        d="M9 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 19l-3-3h6z"
      />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-15.916-1.167L9 10.076 10 6l1 3 8.908 1.782q.091.596.092 1.218"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Face = memo(Icon);
