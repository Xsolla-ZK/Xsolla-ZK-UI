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
        d="M11 3a8 8 0 0 1 8 8c0 1.849-.63 3.549-1.683 4.903l3.39 3.39-1.414 1.414-3.39-3.39A7.96 7.96 0 0 1 11 19a8 8 0 1 1 0-16m0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Search = memo(Icon);
