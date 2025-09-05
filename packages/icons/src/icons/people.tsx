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
        d="M12 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6M5 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6M22 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 21l-1-4H3l-1 4zM16 21l-2-11h-4L8 21zM16 21l1-7h4l1 7z"
      />
    </SvgThemed>
  );
};

export const People = memo(Icon);
