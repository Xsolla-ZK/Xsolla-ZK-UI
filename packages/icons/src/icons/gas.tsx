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
        d="M14 13h2.5v6a1 1 0 1 0 2 0v-8H18V7h.5V5h1v2h.5v4h-.5v8a2 2 0 1 1-4 0v-5H14v7H4V3h10zM7 7h4V5H7z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Gas = memo(Icon);
