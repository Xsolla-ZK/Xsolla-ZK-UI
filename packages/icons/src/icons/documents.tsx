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
        d="M15.75 2H7v17h14V7.1zM19 8l-4-4v4z"
        clipRule="evenodd"
      />
      <Path fill="currentColor" d="M4 5h2v17H4z" />
      <Path fill="currentColor" d="M18 20v2H4v-2z" />
    </SvgThemed>
  );
};

export const Documents = memo(Icon);
