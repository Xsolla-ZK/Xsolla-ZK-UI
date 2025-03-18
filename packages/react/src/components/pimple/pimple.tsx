import { withStaticProperties } from '@tamagui/core';
import { PimpleFrame, PimpleIcon, PimpleText } from './pimple.styled';
import type { PimpleProps } from './pimple.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const PimpleComponent = PimpleFrame.styleable<PimpleProps>(
  ({ children, ...props }, ref: ForwardedRef<TamaguiElement>) => (
    <PimpleFrame {...props} ref={ref}>
      {props.size !== '$200' ? children : null}
    </PimpleFrame>
  ),
  {
    disableTheme: true,
  },
);

const Pimple = withStaticProperties(PimpleComponent, {
  Text: PimpleText,
  Icon: PimpleIcon,
});

export default Pimple;
