// import styled from '@emotion/styled';
// import { TextareaAutosize } from '@mui/base';
// import shouldForwardProp from '@xsolla-zk-ui/react/utils/should-forward-prop';
// import xzkuiInputClasses from './input.classes';
// import type { XZKUIInputBaseProps } from './input.types';
// import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';

import { styled } from '@tamagui/core';
import { Input as InputBase } from '@tamagui/input';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { getMappedProps } from '@xsolla-zk-ui/react/utils/get-mapped-props';
import { INPUT_COMPONENT_NAME } from './input.constants';
import type { InputSizes } from './input.types';

// type StyledProps = XZKUIStyledProps<XZKUIInputBaseProps>;

// const Element = styled('input')(
//   ({ theme }) => `
//     flex-grow: 1;
//     padding: 0;
//     outline: 0;
//     background: none;
//     border: none;
//     font: inherit;
//     color: inherit;
//     caret-color: inherit;
//     &::placeholder {
//       color: ${theme.theme.content.neutralTertiary};
//     }
//   `,
// );

// const Adornment = styled('div')`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: inherit;
// `;

// const TextareaElement = styled(TextareaAutosize, {
//   shouldForwardProp: (prop) => !['ownerState'].includes(prop.toString()),
// })(
//   ({ theme }) => `
//     flex-grow: 1;
//     min-width: 250px;
//     outline: 0;
//     padding: 0;
//     background: none;
//     border: none;
//     font: inherit;
//     color: inherit;
//     caret-color: inherit;
//     resize: none;
//     &::placeholder {
//       color: ${theme.theme.content.neutralTertiary};
//     }
//   `,
// );

// const Root = styled('div', {
//   shouldForwardProp,
// })<StyledProps>(
//   ({ theme }) => `
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: ${theme.common.spacing[200]};
//     max-width: 100%;
//     border: 2px solid transparent;
//     background-color: ${theme.theme.overlay.neutral};
//     color: ${theme.theme.content.neutralPrimary};

//     &.${xzkuiInputClasses.focused} {
//       background-color: ${theme.theme.layer.floor0};
//       border-color: ${theme.theme.border.brandPrimary};
//       caret-color: ${theme.theme.border.brandPrimary};
//     }

//     &.${xzkuiInputClasses.error} {
//       background-color: ${theme.theme.layer.floor0};
//       border-color: ${theme.theme.border.negativePrimary};
//       caret-color: ${theme.theme.border.negativePrimary};
//     }

//     &.${xzkuiInputClasses.readOnly} {
//       border-color: ${theme.theme.border.neutralTertiary};
//     }

//     &.${xzkuiInputClasses.fullWidth} {
//       width: 100%;
//     }

//     @media (pointer: fine) {
//       &:hover {
//       }
//     }

//     &:focus-visible {
//       outline: 0;
//     }
//   `,
//   ({ theme, xzkuiSize }) => theme.components.input.sizes[xzkuiSize],
//   () => ({
//     [`&.${xzkuiInputClasses.adornedStart} ${TextareaElement}`]: {
//       paddingLeft: 'inherit',
//     },
//     [`&.${xzkuiInputClasses.adornedEnd} ${TextareaElement}`]: {
//       paddingRight: 'inherit',
//     },
//   }),
// );

// const XZKUIInputStyled = {
//   Root,
//   Element,
//   Adornment,
//   TextareaElement,
// };

// export default XZKUIInputStyled;

export const Input = styled(InputBase, {
  name: INPUT_COMPONENT_NAME,
  unstyled: true,

  outlineWidth: 0,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  color: '$color',
  animation: 'state',
  animateOnly: ['border'],

  focusStyle: {
    borderColor: '$borderColorFocus',
    caretColor: '$borderColorFocus',
  },

  variants: {
    size: (val: InputSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.input[val];

      if (!componentProps) {
        return {};
      }

      return {
        ...getMappedProps(componentProps.frame),
        ...getMappedProps(componentProps.label),
      };
    },
  } as const,
  defaultVariants: {
    size: '$500',
  },
});
