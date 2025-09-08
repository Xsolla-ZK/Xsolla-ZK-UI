import { isWeb, Stack, Text } from '@tamagui/core';
import { RICH_ICON_COMPONENT_NAME } from '@xsolla-zk/constants';
import { type IconProps } from '@xsolla-zk/ui-primitives';
import { Svg } from 'react-native-svg';
import {
  createIconComponent,
  createStyledMediaContext,
  getComponentsConfig,
  getMappedStyles,
  processMediaValues,
  smartContextStyled,
} from '../../utils';
import type { RichIconContextType, RichIconSizes } from './rich-icon.types';
import type { XORIconProps } from '../../types';
import type { ColorTokens } from '@tamagui/core';

export const RichIconContext = createStyledMediaContext(
  {
    size: '$500',
    color: '$color',
    backgroundColor: '$background',
    shape: 'circle',
  } as RichIconContextType,
  ['size', 'color', 'backgroundColor'],
);

export const RichIconFrame = smartContextStyled(Stack, {
  name: RICH_ICON_COMPONENT_NAME,
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  borderWidth: 0,

  variants: {
    color: () => ({}),
    backgroundColor: () => ({}),
    pressable: {
      true: {
        tag: 'button',
        role: 'button',
        tabIndex: 0,
        borderWidth: 0,
        backgroundColor: 'transparent',
        padding: 0,
        cursor: 'pointer',
        // animation: 'pop',
        pressStyle: {
          scale: 0.96,
        },
        // focusVisibleStyle: {
        //   outlineColor: 'red',
        //   outlineStyle: 'auto',
        //   outlineWidth: 2,
        //   outlineOffset: 1,
        // },
      },
    },
    size: (val: RichIconSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.richIcon[val as keyof typeof config.richIcon];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.frame);
    },
  } as const,
  defaultVariants: {
    size: '$500',
    pressable: false,
  },
});

export const RichIconShapeSvg = smartContextStyled(
  Svg,
  {
    position: 'relative',
    userSelect: 'none',
    context: RichIconContext,
    variants: {
      backgroundColor: (val) => ({
        color: val as ColorTokens,
      }),
      size: (val: RichIconSizes) => {
        const componentsConfig = getComponentsConfig();
        const componentProps =
          componentsConfig.richIcon[val as keyof typeof componentsConfig.richIcon];
        return {
          width: componentProps.frame.minSize,
          height: componentProps.frame.minSize,
        };
      },
    } as const,
  },
  {
    isReactNative: !isWeb,
  },
);

export const RichIconIcon = (props: XORIconProps) => {
  const ctx = RichIconContext.useStyledContext();

  if (!ctx) {
    throw new Error(
      `Xsolla-ZK UI: ${RICH_ICON_COMPONENT_NAME}Context is missing. ${RICH_ICON_COMPONENT_NAME} parts must be placed within <${RICH_ICON_COMPONENT_NAME}>.`,
    );
  }

  const { size, color, shape } = ctx;

  const iconProps = processMediaValues(
    { size, shape, color },
    {
      size: (val, { props, config }) => {
        const componentProps = config.richIcon[val as keyof typeof config.richIcon];

        if (!componentProps) {
          return {};
        }
        return {
          size: props.shape ? componentProps.icon.size : componentProps.frame.minSize,
        };
      },
      color: (val) => ({ color: val }),
    },
  ) as IconProps;

  return createIconComponent({ ...iconProps, ...props });
};

export const RichIconContent = smartContextStyled(Stack, {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const RichIconText = smartContextStyled(Text, {
  name: RICH_ICON_COMPONENT_NAME,
  context: RichIconContext,

  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',

  variants: {
    backgroundColor: () => ({}),
    color: (val) => ({ color: val as ColorTokens }),
    size: (val: RichIconSizes) => {
      const componentsConfig = getComponentsConfig();
      const componentProps =
        componentsConfig.richIcon[val as keyof typeof componentsConfig.richIcon];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.label);
    },
  } as const,
});

// const pimpleSizeMap: Record<RichIconSizes, PimpleSizes> = {
//   $100: '$200',
//   $200: '$300',
//   $300: '$400',
//   $400: '$500',
//   $500: '$500',
//   $600: '$600',
//   $700: '$600',
//   $800: '$700',
//   $900: '$700',
// };

// const PimpleStyled = styled(PimpleBase, {
//   position: 'absolute',

//   variants: {
//     size: (val: PimpleSizes) => {
//       const config = getComponentsConfig();
//       const componentSize = config.pimple[val];
//       if (!componentSize) {
//         return {};
//       }
//       const offset = getTokenValue(componentSize.frame.minSize as Token) < 16 ? -2 : -4;

//       return {
//         top: offset,
//         right: offset,
//       };
//     },
//   } as const,
// });

// const Pimple = PimpleStyled.styleable((props, ref: ForwardedRef<TamaguiElement>) => {
//   const { size } = useContext(RichIconContext.context);
//   return createElement(PimpleStyled, {
//     size: pimpleSizeMap[size],
//     ...props,
//     ref,
//   });
// });

// export const RichIconPimple = Object.assign(Pimple, {
//   Text: PimpleBase.Text,
//   Icon: PimpleBase.Icon,
// });
