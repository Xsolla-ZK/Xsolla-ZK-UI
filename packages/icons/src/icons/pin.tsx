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
        d="M12 2c2.12.003 4.155.83 5.654 2.304A7.8 7.8 0 0 1 20 9.857a7.7 7.7 0 0 1-1.61 4.712l-.002.002c-.008.01-.218.281-.25.32L12 22l-6.135-7.105c-.034-.04-.248-.317-.253-.324A7.7 7.7 0 0 1 4 9.857a7.8 7.8 0 0 1 2.346-5.553A8.09 8.09 0 0 1 12 2m0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Pin = memo(Icon);
