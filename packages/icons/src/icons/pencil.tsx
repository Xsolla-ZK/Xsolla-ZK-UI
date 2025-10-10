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
        d="m16.889 1.172 5.94 5.94L7.938 22H2v-5.94zM4 16.889V20h3.111L17.69 9.422 14.577 6.31z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Pencil = memo(Icon);
