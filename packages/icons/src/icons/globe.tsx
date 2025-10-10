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
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M3.057 13a9.005 9.005 0 0 0 6.524 7.669A15.1 15.1 0 0 1 6.891 13zm14.051 0a15.1 15.1 0 0 1-2.69 7.669A9 9 0 0 0 20.943 13zm-8.212 0A13.1 13.1 0 0 0 12 20.527 13.1 13.1 0 0 0 15.104 13zm.685-9.67A9.01 9.01 0 0 0 3.057 11h3.835A15.1 15.1 0 0 1 9.58 3.33M12 3.472A13.1 13.1 0 0 0 8.896 11h6.208A13.1 13.1 0 0 0 12 3.472m2.418-.142a15.1 15.1 0 0 1 2.69 7.67h3.835a9.005 9.005 0 0 0-6.525-7.67"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Globe = memo(Icon);
