import { withStaticProperties } from '@tamagui/core';
import { BadgeContext, BadgeFrame, BadgeIcon, BadgeText } from './badge.styled';
import type { BadgeProps } from './badge.types';
import type { TamaguiElement, ThemeName } from '@tamagui/core';
import type { ForwardedRef } from 'react';

export const BadgeComponent = BadgeFrame.styleable<BadgeProps>(
  ({ children, tone = 'brand', ...props }, ref: ForwardedRef<TamaguiElement>) => (
    <BadgeFrame theme={tone as unknown as ThemeName} tone={tone} {...props} ref={ref}>
      {children}
    </BadgeFrame>
  ),
  {
    disableTheme: true,
  },
);

const Badge = withStaticProperties(BadgeComponent, {
  Props: BadgeContext.Provider,
  Text: BadgeText,
  Icon: BadgeIcon,
});

export default Badge;
