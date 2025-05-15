import { isWeb, Stack, styled } from '@tamagui/core';
import { SEPARATOR_COMPONENT_NAME } from './separator.constants';
import type { GetProps, SizeTokens, VariantSpreadExtras } from '@tamagui/core';
import type { ColorType } from '@xsolla-zk/react/types/color';

export const Separator = styled(
  Stack,
  {
    name: SEPARATOR_COMPONENT_NAME,
    flexShrink: 0,
    flex: 1,
    y: -0.5,

    variants: {
      color: (val: ColorType) => ({
        backgroundColor: val,
      }),
      vertical: {
        true: {
          y: 0,
          x: -0.5,
          width: 1,
          maxWidth: 1,
          alignSelf: 'stretch',
          height: (isWeb ? 'initial' : 'auto') as SizeTokens,
          maxHeight: (isWeb ? 'initial' : 'auto') as SizeTokens,
        },
        false: {
          width: (isWeb ? '100%' : 'auto') as SizeTokens,
          maxWidth: (isWeb ? '100%' : 'auto') as SizeTokens,
        },
      },
      weight: (val: SizeTokens, extras) => {
        const { props } = extras as VariantSpreadExtras<
          GetProps<typeof Stack> & { vertical: boolean }
        >;

        if (props.vertical) {
          return {
            width: val,
            maxWidth: val,
          };
        }
        return {
          height: val,
          maxHeight: val,
        };
      },
    } as const,
    defaultVariants: {
      vertical: false,
      weight: '$stroke.100',
      color: '$border.neutral-secondary',
    },
  },
  {
    accept: {
      weight: 'size',
    },
  },
);
