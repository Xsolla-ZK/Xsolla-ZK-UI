import { Stack, type VariantSpreadExtras } from '@tamagui/core';
import { DROPDOWN_COMPONENT_NAME, DROPDOWN_CONTENT_COMPONENT_NAME } from '@xsolla-zk/constants';
import { getComponentsConfig, getMappedStyles, smartContextStyled } from '../../utils';
import type { DropdownSizes } from './dropdown.types';
import type { GetProps } from '@tamagui/core';
import type { Placement } from '@tamagui/floating';

const placementToOffset: Record<Placement, string> = {
  bottom: 'marginTop',
  'bottom-start': 'marginTop',
  'bottom-end': 'marginTop',
  left: 'marginRight',
  right: 'marginLeft',
  top: 'marginBottom',
  'top-start': 'marginBottom',
  'top-end': 'marginBottom',
  'right-start': 'marginLeft',
  'right-end': 'marginLeft',
  'left-start': 'marginRight',
  'left-end': 'marginRight',
};

export const DropdownBodyFrame = smartContextStyled(Stack, {
  name: DROPDOWN_COMPONENT_NAME,

  backgroundColor: '$background',
  boxShadow: '$shadow.500',

  variants: {
    placement: (_val: Placement) => ({}),
    size: (val: DropdownSizes, extras) => {
      const { props } = extras as VariantSpreadExtras<
        GetProps<typeof Stack> & {
          placement: Placement;
        }
      >;
      const config = getComponentsConfig();

      const componentProps = config.dropdown[val as keyof typeof config.dropdown];
      if (!componentProps) {
        return {};
      }
      const { marginTop, ...styles } = getMappedStyles(componentProps.frame);

      return {
        [placementToOffset[props.placement]]: marginTop,
        ...styles,
      };
    },
  } as const,

  defaultVariants: {
    size: '$500',
  },
});

export const DropdownBodyContentFrame = smartContextStyled(Stack, {
  name: DROPDOWN_CONTENT_COMPONENT_NAME,

  variants: {
    size: (val: DropdownSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.dropdown[val as keyof typeof config.dropdown];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.content);
    },
  } as const,

  defaultVariants: {
    size: '$500',
  },
});
