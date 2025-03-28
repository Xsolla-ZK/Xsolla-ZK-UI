import { styled } from '@tamagui/core';
import Typography from '../typography/typography';
import { LABEL_COMPONENT_NAME } from './label.constants';

export const LabelFrame = styled(
  Typography,
  {
    name: LABEL_COMPONENT_NAME,
    tag: 'label',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    backgroundColor: 'transparent',
    cursor: 'default',

    variants: {
      size: {
        // '...size': (val, extras) => {
        //   const buttonStyle = getButtonSized(val, extras);
        //   const buttonHeight = buttonStyle?.height;
        //   const fontStyle = getFontSized(val as FontSizeTokens, extras);
        //   return {
        //     ...fontStyle,
        //     lineHeight: buttonHeight ? extras.tokens.size[buttonHeight] : undefined,
        //   };
        // },
      },
    } as const,

    defaultVariants: {},
  },
  {
    neverFlatten: true,
  },
);
