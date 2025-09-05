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
        d="M9 2a7 7 0 1 0 4.273 12.545L19 22l3-3-7.452-5.731a7 7 0 0 0-.598-9.219A7 7 0 0 0 9 2M7.087 4.38a5 5 0 1 1 3.826 9.24 5 5 0 0 1-3.826-9.24"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Search = memo(Icon);
