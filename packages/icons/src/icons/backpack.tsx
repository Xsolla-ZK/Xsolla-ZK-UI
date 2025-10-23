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
        d="M17.013 16.646H7.997v-5.74h9.016zm-6.767-2.87 2.26 2.218 2.261-2.218-2.26-2.217z"
        clipRule="evenodd"
      />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.582 3.105a8.4 8.4 0 0 1 1.917-.222l.211.003c.587.014 1.158.09 1.708.22V1h3.363v3.78a7.97 7.97 0 0 1 2.729 4.53c1.475.714 2.49 2.203 2.49 3.924 0 1.66-.943 3.1-2.332 3.843v3.053h-3.973c-.627 1.674-2.268 2.87-4.194 2.87h-.002c-1.926 0-3.567-1.196-4.195-2.87H4.331v-3.054C2.942 16.334 2 14.893 2 13.234c0-1.72 1.014-3.208 2.489-3.924a7.97 7.97 0 0 1 2.73-4.53V1h3.363zM12.5 5.082c-3.271 0-5.924 2.598-5.924 5.803v7.046h11.848v-7.046c0-3.205-2.652-5.803-5.924-5.803"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Backpack = memo(Icon);
