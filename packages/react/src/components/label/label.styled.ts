import { styled } from '@tamagui/core';
import { Typography } from '../typography/typography';
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
  },
  {
    neverFlatten: true,
  },
);
