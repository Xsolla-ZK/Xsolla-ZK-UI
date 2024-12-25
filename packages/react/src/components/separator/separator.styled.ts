import styled from '@emotion/styled';
import xzkuiSeparatorClasses from './separator.classes';
import type { XZKUISeparatorBaseProps } from './separator.types';
import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';

type StyledProps = XZKUIStyledProps<XZKUISeparatorBaseProps>;

function calcValue(key: string, value?: string | number) {
  return value ? `${key}: ${typeof value === 'string' ? value : value + 'px'};` : undefined;
}

const Main = styled('hr')<StyledProps>(
  ({ theme, xzkuiColor, xzkuiWeight, xzkuiMb, xzkuiMt, xzkuiMl, xzkuiMr, xzkuiMx, xzkuiMy }) => `
    width: 100%;
    height: ${xzkuiWeight}px;
    border: none;
    background-color: ${theme.theme.border[xzkuiColor]};
    ${calcValue('margin-top', xzkuiMt || xzkuiMy)};
    ${calcValue('margin-bottom', xzkuiMb || xzkuiMy)};
    ${calcValue('margin-left', xzkuiMl || xzkuiMx)};
    ${calcValue('margin-right', xzkuiMr || xzkuiMx)};

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
