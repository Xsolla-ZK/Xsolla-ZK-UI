import styled from '@emotion/styled';
import pickCustomColor from '@xsolla-zk-ui/react/utils/color/pick-custom-color';
import shouldForwardProp from '@xsolla-zk-ui/react/utils/should-forward-prop';
import type { XZKUISvgIconBaseProps } from './svg-icon.types';
import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';

type StyledProps = XZKUIStyledProps<XZKUISvgIconBaseProps>;

const Main = styled('span', {
  shouldForwardProp,
})<StyledProps>(({ theme, xzkuiColor, xzkuiSize }) => ({
  display: 'inline-flex',
  fontSize: xzkuiSize ? xzkuiSize + 'px' : 'inherit',
  color: xzkuiColor ? pickCustomColor(theme, xzkuiColor) : 'inherit',

  svg: {
    display: 'inline-block',
    position: 'relative',
    verticalAlign: 'middle',
    userSelect: 'none',
  },
}));

const XZKUISvgIconStyled = {
  Main,
};

export default XZKUISvgIconStyled;
