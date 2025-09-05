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
        d="M21 3H3v18h18zm-11 9.382 4-2V8h-4v2H8V6h8v5.618l-4 2V15h-2zM10 16v2h2v-2z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Question = memo(Icon);
