import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M2 10h20l-3-6H5z" />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="m20 20 2-9H2l2 9zm-8-7-2 2 1.286 1.286L11 18h2l-.286-1.714L14 15z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Chest = memo(Icon);
