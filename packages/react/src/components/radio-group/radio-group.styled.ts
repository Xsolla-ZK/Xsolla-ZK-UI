import styled from '@emotion/styled';
import { Stack } from '@tamagui/core';

// const RADIO_GROUP_ITEM_NAME = 'RadioGroupItem';

// export const RadioGroupItemFrame = styled(Stack, {
//   name: RADIO_GROUP_ITEM_NAME,
//   tag: 'button',

//   variants: {
//     unstyled: {
//       false: {
//         size: '$true',
//         borderRadius: 1000,
//         backgroundColor: '$background',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderWidth: 1,
//         borderColor: '$borderColor',
//         padding: 0,

//         hoverStyle: {
//           borderColor: '$borderColorHover',
//           backgroundColor: '$backgroundHover',
//         },

//         focusStyle: {
//           borderColor: '$borderColorHover',
//           backgroundColor: '$backgroundHover',
//         },

//         focusVisibleStyle: {
//           outlineStyle: 'solid',
//           outlineWidth: 2,
//           outlineColor: '$outlineColor',
//         },

//         pressStyle: {
//           borderColor: '$borderColorFocus',
//           backgroundColor: '$backgroundFocus',
//         },
//       },
//     },

//     disabled: {
//       true: {
//         pointerEvents: 'none',
//         userSelect: 'none',
//         cursor: 'not-allowed',

//         hoverStyle: {
//           borderColor: '$borderColor',
//           backgroundColor: '$background',
//         },

//         pressStyle: {
//           borderColor: '$borderColor',
//           backgroundColor: '$background',
//         },

//         focusVisibleStyle: {
//           outlineWidth: 0,
//         },
//       },
//     },

//     size: {
//       '...size': (value, { props }) => {
//         const size = Math.floor(
//           getVariableValue(getSize(value)) * (props['scaleSize'] ?? 0.5)
//         )
//         return {
//           width: size,
//           height: size,
//         }
//       },
//     },
//   } as const,

//   defaultVariants: {
//     unstyled: process.env.TAMAGUI_HEADLESS === '1',
//   },
// })

const Root = styled('div')``;

const XZKUIRadioGroupStyled = {
  Root,
};

export default XZKUIRadioGroupStyled;
