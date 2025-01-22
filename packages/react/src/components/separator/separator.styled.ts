import styled from '@emotion/styled';
import pickCustomColor from '@xsolla-zk-ui/react/utils/color/pick-custom-color';
import shouldForwardProp from '@xsolla-zk-ui/react/utils/should-forward-prop';
import xzkuiSeparatorClasses from './separator.classes';
import type { XZKUISeparatorBaseProps } from './separator.types';
import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';

type StyledProps = XZKUIStyledProps<XZKUISeparatorBaseProps>;

const Root = styled('hr', {
  shouldForwardProp,
})<StyledProps>(
  ({ theme, xzkuiColor, xzkuiWeight }) => `
    width: 100%;
    height: ${xzkuiWeight}px;
    border: none;
    background-color: ${xzkuiColor ? pickCustomColor(theme, xzkuiColor) : theme.theme.border.neutralSecondary};

    &.${xzkuiSeparatorClasses.vertical} {
      width: ${xzkuiWeight}px;
      height: 100%;
    }
  `,
);

const XZKUISeparatorStyled = {
  Root,
};

export default XZKUISeparatorStyled;
