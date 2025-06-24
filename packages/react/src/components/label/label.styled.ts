import { styled } from '@tamagui/core';
import { LABEL_COMPONENT_NAME } from '@xsolla-zk/constants';
import { Typography } from '../typography/typography';

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
