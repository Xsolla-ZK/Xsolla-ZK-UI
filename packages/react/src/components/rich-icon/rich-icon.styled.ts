import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { getMappedProps } from '@xsolla-zk-ui/react/utils/get-mapped-props';
import { cloneElement, createElement, isValidElement, useContext } from 'react';
import { Svg as _Svg } from 'react-native-svg';
import Pimple from '../pimple/pimple';
import type { RichIconContextType, RichIconSizes } from './rich-icon.types';
import type { GetProps } from '@tamagui/core';
import type { IconProps } from '@tamagui/helpers-icon';
import type { XORIconProps } from '@xsolla-zk-ui/react/types/icon';

export const RICH_ICON_COMPONENT_NAME = 'RichIcon';

export const richIconPaths = {
  circle:
    'M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z',
  squircle:
    'M0 36.5714C0 23.7702 0 17.3696 2.49128 12.4802C4.68267 8.17937 8.17937 4.68267 12.4802 2.49128C17.3696 0 23.7702 0 36.5714 0H43.4286C56.2298 0 62.6304 0 67.5198 2.49128C71.8206 4.68267 75.3173 8.17937 77.5087 12.4802C80 17.3696 80 23.7702 80 36.5714V43.4286C80 56.2298 80 62.6304 77.5087 67.5198C75.3173 71.8206 71.8206 75.3173 67.5198 77.5087C62.6304 80 56.2298 80 43.4286 80H36.5714C23.7702 80 17.3696 80 12.4802 77.5087C8.17937 75.3173 4.68267 71.8206 2.49128 67.5198C0 62.6304 0 56.2298 0 43.4286V36.5714Z',
  rhombus: 'M5 40L40 0L75 40L40 80L5 40Z',
  blocksHorizontal:
    'M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C8.95431 40 0 48.9543 0 60C0 71.0457 8.95431 80 20 80H60C71.0457 80 80 71.0457 80 60C80 48.9543 71.0457 40 60 40C71.0457 40 80 31.0457 80 20C80 8.95431 71.0457 0 60 0H20Z',
  circlesTLBR:
    'M21.2854 58.7146C8.96691 54.981 0 43.5377 0 30C0 13.4315 13.4315 0 30 0C43.5377 0 54.981 8.96691 58.7146 21.2854C71.0331 25.019 80 36.4623 80 50C80 66.5685 66.5685 80 50 80C36.4623 80 25.019 71.0331 21.2854 58.7146Z',
  leaf: 'M0 36.5714C0 23.7702 0 17.3696 2.49128 12.4802C4.68267 8.17937 8.17937 4.68267 12.4802 2.49128C17.3696 0 23.7702 0 36.5714 0H80V43.4286C80 56.2298 80 62.6304 77.5087 67.5198C75.3173 71.8206 71.8206 75.3173 67.5198 77.5087C62.6304 80 56.2298 80 43.4286 80H0V36.5714Z',
  arrowUp:
    'M0 0L11.7157 11.7157C4.4771 18.9543 0 28.9543 0 40C0 62.0914 17.9086 80 40 80C51.0457 80 61.0457 75.5229 68.2843 68.2843L80 80V36.5714C80 23.7702 80 17.3696 77.5087 12.4802C75.3173 8.17941 71.8206 4.6827 67.5198 2.49128C62.6304 0 56.2298 0 43.4286 0H0Z',
  arrowDown:
    'M80 80L68.2843 68.2843C75.5229 61.0457 80 51.0457 80 40C80 17.9086 62.0914 0 40 0C28.9543 0 18.9543 4.4771 11.7157 11.7157L0 0V43.4286C0 56.2298 0 62.6304 2.49128 67.5198C4.6827 71.8206 8.17941 75.3173 12.4802 77.5087C17.3696 80 23.7702 80 36.5714 80H80Z',
  diamond: 'M0 45.7143L14.2857 0H40H65.7143L80 45.7143L40 80L0 45.7143Z',
  oval: 'M80 40C80 56.5685 62.0914 70 40 70C17.9086 70 0 56.5685 0 40C0 23.4315 17.9086 10 40 10C62.0914 10 80 23.4315 80 40Z',
  cross:
    'M5.88745 5.88745C-1.96248 13.7374 -1.96248 26.4646 5.88745 34.3146L11.5729 40L5.88745 45.6854C-1.96248 53.5354 -1.96248 66.2626 5.88745 74.1125C13.7374 81.9625 26.4646 81.9625 34.3146 74.1125L40 68.4271L45.6854 74.1125C53.5354 81.9625 66.2626 81.9625 74.1125 74.1125C81.9625 66.2626 81.9625 53.5354 74.1125 45.6854L68.4271 40L74.1125 34.3146C81.9625 26.4646 81.9625 13.7374 74.1125 5.88745C66.2626 -1.96248 53.5354 -1.96248 45.6854 5.88745L40 11.5729L34.3146 5.88745C26.4646 -1.96248 13.7374 -1.96248 5.88745 5.88745Z',
  hexagon: 'M40 0L75 20V60L40 80L5 60V20L40 0Z',
  blocksVertical:
    'M0 60C0 71.0457 8.95431 80 20 80C31.0457 80 40 71.0457 40 60C40 71.0457 48.9543 80 60 80C71.0457 80 80 71.0457 80 60V20C80 8.9543 71.0457 0 60 0C48.9543 0 40 8.9543 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20V60Z',
};

export const RichIconContext = createStyledContext<RichIconContextType>({
  size: '$500',
  backgroundColor: '$overlay.neutral',
  noShape: false,
});

export const RichIconFrame = styled(Stack, {
  name: RICH_ICON_COMPONENT_NAME,
  context: RichIconContext,
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    backgroundColor: () => ({}),
    noShape: {
      false: {},
    },
    pressable: {
      true: {
        tag: 'button',
        role: 'button',
        border: 'none',
        backgroundColor: 'transparent',
        padding: 0,
        cursor: 'pointer',
      },
    },
    size: (val: RichIconSizes) => {
      const config = getComponentsConfig();
      const control = config.control[val];

      if (!control) {
        return {};
      }

      return {
        minWidth: getMappedProps(control).minWidth,
        minHeight: getMappedProps(control).minHeight,
      };
    },
  } as const,
  defaultVariants: {
    noShape: false,
    size: '$500',
    backgroundColor: '$overlay.neutral',
    pressable: false,
  },
});

const Svg = styled(_Svg, {
  position: 'relative',
  userSelect: 'none',
});

export const RichIconShapeIcon = (props: Omit<GetProps<typeof Svg>, 'width' | 'height'>) => {
  const { size, backgroundColor } = useContext(RichIconContext.context);

  const config = getComponentsConfig();
  const control = config.control[size];

  if (!control) {
    return null;
  }

  return createElement(Svg, {
    width: control.minSize,
    height: control.minSize,
    color: backgroundColor,
    ...props,
  });
};

export const RichIconIcon = ({ children, icon, ...rest }: XORIconProps) => {
  const ctx = useContext(RichIconContext.context);

  if (!ctx) {
    throw new Error(
      `Xsolla-ZK UI: ${RICH_ICON_COMPONENT_NAME}Context is missing. ${RICH_ICON_COMPONENT_NAME} parts must be placed within <${RICH_ICON_COMPONENT_NAME}>.`,
    );
  }

  const config = getComponentsConfig();
  const control = config.control[ctx.size];
  const componentProps = config.richIcon[ctx.size];

  if (!componentProps || !control) {
    throw new Error(
      `Xsolla-ZK UI: ${RICH_ICON_COMPONENT_NAME} component props for size ${ctx.size} not found.`,
    );
  }

  const iconSize = ctx.noShape ? control.minSize : componentProps.icon.size;

  if (icon) {
    return createElement(icon, {
      name: RICH_ICON_COMPONENT_NAME,
      size: iconSize,
      color: '$color',
      ...rest,
    } as IconProps);
  }

  return isValidElement(children)
    ? cloneElement(children, {
        name: RICH_ICON_COMPONENT_NAME,
        size: iconSize,
        color: '$color',
        ...rest,
      } as {})
    : null;
};

export const Content = styled(Text, {
  name: RICH_ICON_COMPONENT_NAME,
  context: RichIconContext,
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$color',

  variants: {
    noShape: () => ({
      backgroundColor: 'transparent',
    }),
  },
});

const Pimp = styled(Pimple, {
  context: RichIconContext,
});

export const RichIconPimple = Object.assign(Pimp, {
  Text: Pimple.Text,
});
