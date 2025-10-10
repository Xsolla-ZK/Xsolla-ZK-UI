import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M14 22h-4v-3h4z" />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 4h-2V2h2zm-1 0a7 7 0 0 1 7 7v5h3v2H2v-2h3v-5a7 7 0 0 1 7-7"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Bell = memo(Icon);
