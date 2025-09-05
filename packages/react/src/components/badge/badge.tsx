import { withStaticProperties } from '@tamagui/core';
import { forwardRef } from 'react';
import { useIconsPosition } from '../../hooks';
import { BadgeContext, BadgeFrame, BadgeIcon, BadgeText } from './badge.styled';
import type { BadgeProps } from './badge.types';
import type { TamaguiElement, ThemeName } from '@tamagui/core';

export const BadgeComponent = forwardRef<TamaguiElement, BadgeProps>(
  ({ children, tone = 'brand', ...propsIn }, ref) => {
    const iconsPosition = useIconsPosition(children, BadgeIcon);

    const providerValue = {
      tone,
      disabled: propsIn.disabled,
      ...iconsPosition,
    };

    return (
      <BadgeContext.Provider componentProps={propsIn} {...providerValue}>
        <BadgeFrame
          theme={tone as unknown as ThemeName}
          tone={tone}
          {...iconsPosition}
          {...propsIn}
          ref={ref}
        >
          {children}
        </BadgeFrame>
      </BadgeContext.Provider>
    );
  },
);

export const Badge = withStaticProperties(BadgeComponent, {
  Text: BadgeText,
  Icon: BadgeIcon,
});
