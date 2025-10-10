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
        d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9h20zM4 17h2v-1H4zm3 0h4v-1H7z"
        clipRule="evenodd"
      />
      <Path fill="currentColor" d="M20 5a2 2 0 0 1 2 2H2a2 2 0 0 1 2-2z" />
    </SvgThemed>
  );
};

export const BankCard = memo(Icon);
