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
        d="m13 10.265 7.163-4.135 1 1.731-7.159 4.132 7.164 4.137-1 1.731L13 13.723V22h-2v-8.272L3.842 17.86l-1-1.731 7.163-4.137-7.158-4.132 1-1.731 7.154 4.13V2h2z"
      />
    </SvgThemed>
  );
};

export const Asterisk = memo(Icon);
