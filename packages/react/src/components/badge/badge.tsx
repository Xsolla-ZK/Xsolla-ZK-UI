import { withStaticProperties } from '@tamagui/core';
import { useIconsPosition } from '@xsolla-zk-ui/react/hooks/use-icons-position';
import { BadgeContext, BadgeFrame, BadgeIcon, BadgeText } from './badge.styled';
import type { BadgeProps } from './badge.types';
import type { TamaguiElement, ThemeName } from '@tamagui/core';
import type { ForwardedRef } from 'react';

export const BadgeComponent = BadgeFrame.styleable<BadgeProps>(
  ({ children, tone = 'brand', ...props }, ref: ForwardedRef<TamaguiElement>) => {
    const iconsPosition = useIconsPosition(children, BadgeIcon);

    return (
      <BadgeFrame
        theme={tone as unknown as ThemeName}
        tone={tone}
        {...iconsPosition}
        {...props}
        ref={ref}
      >
        {children}
      </BadgeFrame>
    );
  },
  {
    disableTheme: true,
  },
);

export const Badge = withStaticProperties(BadgeComponent, {
  Props: BadgeContext.Provider,
  Text: BadgeText,
  Icon: BadgeIcon,
});
