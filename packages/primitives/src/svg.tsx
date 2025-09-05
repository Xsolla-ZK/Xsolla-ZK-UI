import { isWeb, styled } from '@tamagui/core';
import { getSafeTokenValue } from '@xsolla-zk/ui-utils';
import { Svg } from 'react-native-svg';
import type { ColorTokens, GetProps, SizeTokens } from '@tamagui/core';
import type { NamedExoticComponent } from 'react';

type SizeProp = number | SizeTokens;
type ColorProp = ColorTokens | (string & {});

export const SvgThemed = styled(
  Svg,
  {
    variants: {
      color: (val: ColorProp) => ({
        color: val,
      }),
      size: (val: SizeProp) => ({
        width: getSafeTokenValue(val),
        height: getSafeTokenValue(val),
      }),
    } as const,
  },
  {
    isReactNative: !isWeb,
  },
);

export type IconProps = GetProps<typeof SvgThemed>;

export type IconComponent = NamedExoticComponent<IconProps>;
