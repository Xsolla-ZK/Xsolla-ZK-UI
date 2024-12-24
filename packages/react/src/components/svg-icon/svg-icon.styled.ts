import styled from '@emotion/styled';
import type { XZKUISvgIconBaseProps } from './svg-icon.types';

const Main = styled('span')<XZKUISvgIconBaseProps>(
  ({ theme, iconColor = 'neutral-primary', iconSize = 24 }) => ({
    display: 'inline-flex',
    fontSize: iconSize ? iconSize + 'px' : undefined,
    color: iconColor ? theme.theme.content[iconColor] : undefined,

    svg: {
      display: 'inline-block',
      position: 'relative',
      verticalAlign: 'middle',
      userSelect: 'none',
    },
  }),
);

const XZKUISvgIconStyled = {
  Main,
};

export default XZKUISvgIconStyled;
