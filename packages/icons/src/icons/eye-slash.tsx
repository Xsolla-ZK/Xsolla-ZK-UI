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
        fillRule="evenodd"
        d="M20.414 21h-2.828l-1.808-1.807A9 9 0 0 1 12 20c-7.273 0-10-8-10-8 .004-.011.727-2.122 2.413-4.173L1.586 5h2.828zM7.196 10.61a5 5 0 0 0 6.193 6.194l-1.836-1.837a3 3 0 0 1-2.52-2.52z"
        clipRule="evenodd"
      />
      <Path
        fill="currentColor"
        d="M12 4c7.259 0 9.99 7.969 10 8 0 0-.99 2.907-3.37 5.216l-2.458-2.458a5 5 0 0 0-6.929-6.93L6.935 5.521A9.03 9.03 0 0 1 12 4"
      />
      <Path
        fill="currentColor"
        d="M12 9a3 3 0 0 1 2.708 4.294l-4.001-4.002C11.098 9.105 11.537 9 12 9"
      />
    </SvgThemed>
  );
};

export const EyeSlash = memo(Icon);
