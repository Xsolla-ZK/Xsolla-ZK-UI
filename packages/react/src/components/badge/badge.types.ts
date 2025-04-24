import type { BADGE_COMPONENT_NAME, BadgeFrame } from './badge.styled';
import type { GetProps, StylableComponent, VariantSpreadExtras } from '@tamagui/core';
import type { IconsPosition } from '@xsolla-zk-ui/react/types/icon';
import type { GetComponentTone } from '@xsolla-zk-ui/react/types/theme';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';

export type BadgeSizes = keyof ComponentsConfig['badge'];
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

export interface BadgeProps extends BadgeSharedProps {
  tone?: BadgeTone;
}
