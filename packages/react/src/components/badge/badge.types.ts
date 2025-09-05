import type { BadgeFrame } from './badge.styled';
import type { GetComponentTone, IconsPosition } from '../../types';
import type { ComponentsConfig } from '../../utils';
import type { GetProps, StylableComponent, VariantSpreadExtras } from '@tamagui/core';
import type { BADGE_COMPONENT_NAME } from '@xsolla-zk/constants';

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
