import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" fillRule="evenodd" d="M3 3h8v8H3zm3 3h2v2H6z" clipRule="evenodd" />
      <Path fill="currentColor" d="M13 13h2v2h-2z" />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 15h-2v2h-2v2h2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v-2h-2zm0 2h-2v2h2zm0 0v-2h2v2zM21 3h-8v8h8zm-3 3h-2v2h2zM3 13h8v8H3zm3 3h2v2H6z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const QrCode = memo(Icon);
