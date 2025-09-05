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
        d="m8.639 8.917 1.42-1.42a11.94 11.94 0 0 1 9.857-3.413 11.94 11.94 0 0 1-3.412 9.856l-1.421 1.421zm8.055 0a1.611 1.611 0 1 1-3.222 0 1.611 1.611 0 0 1 3.222 0"
        clipRule="evenodd"
      />
      <Path
        fill="currentColor"
        d="M4.984 8.532a3.05 3.05 0 0 1 3.729.46l6.296 6.295c.99.99 1.18 2.528.459 3.729L14.278 21 3 9.723zM9.306 17.916l.138-.138-3.222-3.222-.138.138a7.78 7.78 0 0 0-2.279 5.5c2.064 0 4.042-.82 5.5-2.278"
      />
    </SvgThemed>
  );
};

export const Rocket = memo(Icon);
