import type { BADGE_COMPONENT_NAME, BadgeFrame } from './badge.styled';
import type { GetProps, StylableComponent, ThemeName, VariantSpreadExtras } from '@tamagui/core';
import type { ExtractSubthemeKeys } from '@xsolla-zk-ui/react/types/helpers';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';

export type BadgeSizes = keyof ComponentsConfig['badge'];
export type BadgeTone = 'brand' | ExtractSubthemeKeys<ThemeName, typeof BADGE_COMPONENT_NAME>;
export type BadgeVariantSpreadExtras<T extends StylableComponent> = VariantSpreadExtras<
  GetProps<T> & BadgeContextType
>;

export type BadgeContextType = {
  size: BadgeSizes;
  disabled: boolean;
  tone: BadgeTone;
};

type BadgeSharedProps = GetProps<typeof BadgeFrame>;

export interface BadgeProps extends BadgeSharedProps {
  tone?: BadgeTone;
}
