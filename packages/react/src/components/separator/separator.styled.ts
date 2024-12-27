import styled from '@emotion/styled';
import pickCustomColor from '@xsolla-zk-ui/react/utils/color/pick-custom-color';
import xzkuiSeparatorClasses from './separator.classes';
import type { XZKUISeparatorBaseProps } from './separator.types';
import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';

type StyledProps = XZKUIStyledProps<XZKUISeparatorBaseProps>;

const Main = styled('hr')<StyledProps>(
  ({ theme, xzkuiColor, xzkuiWeight }) => `
    width: 100%;
    height: ${xzkuiWeight}px;
    border: none;
    background-color: ${pickCustomColor(xzkuiColor, theme.theme.border)};

    &.${xzkuiSeparatorClasses.vertical} {
      width: ${xzkuiWeight}px;
      height: 100%;
    }
  `,
);

const XZKUISeparatorStyled = {
  Main,
};

export default XZKUISeparatorStyled;
