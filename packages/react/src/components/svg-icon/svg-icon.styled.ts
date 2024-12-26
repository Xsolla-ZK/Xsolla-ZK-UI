import styled from '@emotion/styled';
import type { XZKUISvgIconBaseProps } from './svg-icon.types';

const Main = styled('span')<XZKUISvgIconBaseProps>(
  ({ theme, iconColor = 'neutralPrimary', iconSize }) => ({
    display: 'inline-flex',
    fontSize: iconSize ? iconSize + 'px' : 'inherit',
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
