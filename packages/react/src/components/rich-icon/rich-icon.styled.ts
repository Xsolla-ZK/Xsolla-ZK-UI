import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import { type IconProps } from '@tamagui/helpers-icon';
import { cloneElement, createElement, isValidElement, useContext } from 'react';
import { Path as _Path, Svg as _Svg } from 'react-native-svg';
import { getComponentsConfig, getMappedStyles } from '../../utils';
import { RICH_ICON_COMPONENT_NAME } from './rich-icon.constants';
import type { RichIconContextType, RichIconSizes } from './rich-icon.types';
import type { XORIconProps } from '../../types';
import type { GetProps } from '@tamagui/core';

export const RichIconContext = createStyledContext<RichIconContextType>({
  size: '$500',
  color: '$color',
  backgroundColor: '$background',
  noShape: false,
});

export const RichIconFrame = styled(Stack, {
  name: RICH_ICON_COMPONENT_NAME,
  context: RichIconContext,
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  borderWidth: 0,

  variants: {
    backgroundColor: () => ({
      backgroundColor: 'transparent',
    }),
    noShape: {
      false: {},
    },
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
    noShape: false,
    size: '$500',
    backgroundColor: '$background',
    pressable: false,
  },
});

const Svg = styled(_Svg, {
  position: 'relative',
  userSelect: 'none',
});

export const RichIconShapeSvg = (props: Omit<GetProps<typeof Svg>, 'width' | 'height'>) => {
  const { size, backgroundColor } = useContext(RichIconContext.context);

  const config = getComponentsConfig();
  const componentProps = config.richIcon[size as keyof typeof config.richIcon];

  if (!componentProps) {
    return null;
  }

  return createElement(Svg, {
    width: componentProps.frame.minSize,
    height: componentProps.frame.minSize,
    color: backgroundColor,
    ...props,
  });
};

export const RichIconShapePath = styled(
  _Path,
  {},
  {
    accept: {
      stroke: 'color',
    } as const,
  },
);

export const RichIconIcon = ({ children, icon, ...rest }: XORIconProps) => {
  const ctx = useContext(RichIconContext.context);

  if (!ctx) {
    throw new Error(
      `Xsolla-ZK UI: ${RICH_ICON_COMPONENT_NAME}Context is missing. ${RICH_ICON_COMPONENT_NAME} parts must be placed within <${RICH_ICON_COMPONENT_NAME}>.`,
    );
  }

  const config = getComponentsConfig();
  const componentProps = config.richIcon[ctx.size as keyof typeof config.richIcon];

  if (!componentProps) {
    throw new Error(
      `Xsolla-ZK UI: ${RICH_ICON_COMPONENT_NAME} component props for size ${ctx.size} not found.`,
    );
  }

  const iconSize = ctx.noShape ? componentProps.frame.minSize : componentProps.icon.size;

  if (icon) {
    return createElement(icon, {
      size: iconSize,
      color: ctx.color,
      ...rest,
    } as IconProps);
  }

  return isValidElement(children)
    ? cloneElement(children, {
        size: iconSize,
        color: ctx.color,
        ...rest,
      } as {})
    : null;
};

export const RichIconContent = styled(Stack, {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    noShape: () => ({
      backgroundColor: 'transparent',
    }),
  } as const,
});

export const RichIconText = styled(Text, {
  name: RICH_ICON_COMPONENT_NAME,
  context: RichIconContext,

  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',

  variants: {
    backgroundColor: () => ({}),
    size: (val: RichIconSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.richIcon[val as keyof typeof config.richIcon];
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
