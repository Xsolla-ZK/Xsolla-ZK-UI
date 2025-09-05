import { LABEL_COMPONENT_NAME } from '@xsolla-zk/constants';
import { smartContextStyled } from '../../utils';
import { Typography } from '../typography/typography';

export const LabelFrame = smartContextStyled(
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
