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
        d="M13.5 1A2.5 2.5 0 0 1 16 3.5V19a4 4 0 0 1-8 0V2.5h2V19a2 2 0 1 0 4 0V3.5a.5.5 0 0 0-1 0V18h-2V3.5A2.5 2.5 0 0 1 13.5 1"
      />
    </SvgThemed>
  );
};

export const PaperClip = memo(Icon);
