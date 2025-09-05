import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M2 4h20v3H2z" />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 10h20v10H2zm10 3H4v1h8zm-8 2h6v1H4z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const BankCard = memo(Icon);
