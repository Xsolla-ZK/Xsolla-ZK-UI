// const Root = styled('div')<Pick<StyledProps, 'xzkuiSize'>>(
//   ({ theme }) => `
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     max-width: 100%;
//     cursor: pointer;
//     color: ${theme.theme.content.neutralPrimary};

//     &.${xzkuiCheckboxClasses.focusVisible} {
//       outline: auto;
//     }

//     &.${xzkuiCheckboxClasses.disabled} {
//       cursor: not-allowed;
//     }
//   `,
//   ({ theme, xzkuiSize }) => theme.components.radio.sizes[xzkuiSize],
// );

// const Indicator = styled('span', {
//   shouldForwardProp,
// })<StyledProps>(
//   ({ theme, xzkuiBg, xzkuiColor }) => `
//     position: relative;
//     display: inline-flex;
//     justify-content: center;
//     align-items: center;
//     border-style: solid;
//     border-color: ${theme.theme.border.neutralSecondary};
//     background-color: ${theme.theme.overlay.neutral};
//     color: ${xzkuiColor ? pickCustomColor(theme, xzkuiColor) : theme.theme.content.staticDarkPrimary};
//     overflow: hidden;

//     &:before {
//       content: '';
//       position: absolute;
//       top: 0;
//       bottom: 0;
//       left: 0;
//       right: 0;
//       border-radius: inherit;
//       background-color: ${theme.theme.background.neutralHigh};
//       mix-blend-mode: color-dodge;
//       transition: ${theme.transitions.state};
//       transition-property: opacity, background;
//       opacity: 0;
//     }

//     .${xzkuiCheckboxClasses.checked} & {
//       background-color: ${xzkuiBg ? pickCustomColor(theme, xzkuiBg) : theme.theme.background.brandHigh};
//     }

//     .${xzkuiCheckboxClasses.disabled} & {
//       background-color: ${theme.theme.overlay.neutral};
//       color: ${theme.theme.content.neutralTertiary};
//       &:before {
//         border-color: ${theme.theme.border.neutralTertiary};
//       }
//     }
//   `,
//   ({ theme, xzkuiSize }) => {
//     const box = theme.components.checkbox.box.sizes[xzkuiSize];

//     return {
//       ...box,
//       [`&:before`]: {
//         top: `-${box.borderWidth}`,
//         left: `-${box.borderWidth}`,
//         right: `-${box.borderWidth}`,
//         bottom: `-${box.borderWidth}`,
//       },
//       [`.${xzkuiCheckboxClasses.checked} &`]: theme.components.checkbox.indicator.sizes[xzkuiSize],
//     };
//   },
// );

// const Input = styled('input')(
//   () => `
//     cursor: inherit;
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     margin: 0;
//     padding: 0;
//     opacity: 0;
//     z-index: 1;

//     @media (pointer: fine) {
//       &:not([disabled]):hover + ${Indicator} {
//         &:before {
//           opacity: 1;
//         }
//       }
//     }
//   `,
// );

import { isIndeterminate } from '@tamagui/checkbox-headless';
import { createStyledContext, getTokenValue, Stack, styled } from '@tamagui/core';
import { getMappedProps } from '@xsolla-zk-ui/react/utils/get-mapped-props';
import { cloneElement, createElement, isValidElement, useContext } from 'react';
import { CHECKBOX_COMPONENT_NAME } from './checkbox.constants';
import type { CheckboxContextType, CheckboxIndicatorProps, CheckboxSizes } from './checkbox.types';
import type { IconProps } from '@tamagui/helpers-icon';

export const checkboxComponentConfig = {
  $400: {
    frame: {
      size: '$size.100',
      borderWidth: '$stroke.100',
      borderRadius: '$radius.200',
    },
    icon: {
      size: '$size.80',
    },
    label: {
      typography: 'compact.300.accent',
    },
  },
  $500: {
    frame: {
      size: '$size.200',
      borderWidth: '$stroke.100',
      borderRadius: '$radius.300',
    },
    icon: {
      size: '$size.100',
    },
    label: {
      typography: 'compact.300.accent',
    },
  },
  $600: {
    frame: {
      size: '$size.300',
      borderWidth: '$stroke.200',
      borderRadius: '$radius.300',
    },
    icon: {
      size: '$size.150',
    },
    label: {
      typography: 'compact.350.accent',
    },
  },
};

export const CheckboxContext = createStyledContext<CheckboxContextType>({
  size: '$500',
  checked: false,
  disabled: false,
});

export const CheckboxFrame = styled(Stack, {
  name: CHECKBOX_COMPONENT_NAME,
  context: CheckboxContext,
  tag: 'button',
  tabIndex: 0,

  position: 'relative',
  padding: 0,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  cursor: 'pointer',

  variants: {
    size: (val: CheckboxSizes) => {
      const checkboxConfig = checkboxComponentConfig[val];

      if (!checkboxConfig) return {};

      return getMappedProps(checkboxConfig.frame);
    },

    disabled: {
      true: {
        pointerEvents: 'none',
        userSelect: 'none',
        cursor: 'not-allowed',

        // focusStyle: {
        //   outlineWidth: 0,
        // },
      },
    },
  } as const,

  defaultVariants: {
    size: '$500',
  },
});

export const CheckboxOverlay = styled(Stack, {
  tag: 'span',
  position: 'absolute',
  context: CheckboxContext,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  pointerEvents: 'none',
  opacity: 0,
  zIndex: 2,
  borderRadius: 'inherit',
  mixBlendMode: 'color-dodge',
  animation: 'state',
  animateOnly: ['opacity'],
  backgroundColor: '$background.neutral-high',

  '$group-hover': {
    opacity: 1,
  },
  '$group-press': {
    opacity: 0.5,
  },
  variants: {
    size: (val: CheckboxSizes, extras) => {
      const { props } = extras;
      const checkboxConfig = checkboxComponentConfig[val];

      if (!checkboxConfig) return {};

      const { borderRadius, borderWidth } = getMappedProps(checkboxConfig.frame);
      const offset = -getTokenValue(borderWidth);

      return {
        borderRadius: props.checked
          ? getTokenValue(borderRadius) - getTokenValue(borderWidth)
          : borderRadius,
        top: offset,
        bottom: offset,
        left: offset,
        right: offset,
      };
    },
    checked: {
      true: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
  } as const,
});

export const CheckboxIndicator = (props: CheckboxIndicatorProps) => {
  const { children, icon, forceMount, disablePassStyles, ...indicatorProps } = props;
  const ctx = useContext(CheckboxContext.context);

  const checkboxConfig = checkboxComponentConfig[ctx.size];

  if (forceMount || isIndeterminate(ctx.checked) || ctx.checked === true) {
    if (icon) {
      return createElement(icon, {
        name: CHECKBOX_COMPONENT_NAME,
        size: checkboxConfig.icon.size,
        color: '$color',
        ...indicatorProps,
      } as IconProps);
    }

    return isValidElement(children)
      ? cloneElement(children, {
          name: CHECKBOX_COMPONENT_NAME,
          size: checkboxConfig.icon.size,
          color: '$color',
          ...indicatorProps,
        } as {})
      : null;
  }

  return null;
};
