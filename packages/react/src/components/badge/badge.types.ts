import type { BADGE_COMPONENT_NAME } from './badge.constants';
import type { BadgeFrame } from './badge.styled';
import type { IconsPosition, GetComponentTone } from '../../types';
import type { ComponentsConfig } from '../../utils';
import type { GetProps, StylableComponent, VariantSpreadExtras } from '@tamagui/core';

export type BadgeSizes = keyof ComponentsConfig['badge'] | (string & {});
export type BadgeTone = GetComponentTone<typeof BADGE_COMPONENT_NAME>;
export type BadgeVariantSpreadExtras<T extends StylableComponent> = VariantSpreadExtras<
  GetProps<T> & BadgeContextType
>;

export type BadgeContextType = Partial<IconsPosition> & {
  size: BadgeSizes;
  disabled: boolean;
  tone: BadgeTone;
};

type BadgeSharedProps = GetProps<typeof BadgeFrame>;

export type BadgeProps = BadgeSharedProps & {
  tone?: BadgeTone;
};
