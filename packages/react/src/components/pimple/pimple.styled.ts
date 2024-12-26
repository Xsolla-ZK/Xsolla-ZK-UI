import styled from '@emotion/styled';
import XZKUISvgIconStyled from '../svg-icon/svg-icon.styled';
import xzkuiPimpleClasses from './pimple.classes';
import type { XZKUIPimpleBaseProps } from './pimple.types';
import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';

type StyledProps = XZKUIStyledProps<XZKUIPimpleBaseProps>;

const Main = styled('div')<StyledProps>(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: ${theme.common.radius[999]};
    background-color: ${theme.theme.background.negativeHigh};
    color: ${theme.theme.content.staticLightPrimary};

    &.${xzkuiPimpleClasses.withIcon} {
      padding: 0;
    }

    ${XZKUISvgIconStyled.Main} {
      font-size: inherit;
      color: inherit;
    }
  `,
  ({ theme, xzkuiSize }) => theme.components.pimple.sizes[xzkuiSize],
);

const XZKUIPimpleStyled = {
  Main,
};

export default XZKUIPimpleStyled;
