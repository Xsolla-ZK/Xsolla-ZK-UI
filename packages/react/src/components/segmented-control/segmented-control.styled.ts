import styled from '@emotion/styled';
import { buttonClasses, Button as MuiButton } from '@mui/base';
import shouldForwardProp from '@xsolla-zk-ui/react/utils/should-forward-prop';
import type { XZKUISegmentedControlBaseProps } from './segmented-control.types';
import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';

type StyledProps = XZKUIStyledProps<XZKUISegmentedControlBaseProps>;

const Control = styled(MuiButton)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    border: ${theme.common.stroke[100]} solid transparent;
    color: ${theme.theme.content.neutralSecondary};

    &.${buttonClasses.active} {
      border-color: ${theme.theme.border.neutralTertiary};
      background-color: ${theme.theme.overlay.neutral};
      color: ${theme.theme.content.neutralPrimary};
    }
  `,
);

const Main = styled('div', {
  shouldForwardProp,
})<StyledProps>(
  ({ theme }) => `
    display: flex;
    align-items: center;
    width: 100%;
    border: ${theme.common.stroke[100]} solid ${theme.theme.border.neutralSecondary};
    padding: ${theme.common.spacing[100]};
    box-sizing: border-box;
    ${Control} {
      flex: 1;
    }
  `,
  ({ theme, xzkuiSize }) => theme.components.segmentedControl.sizes[xzkuiSize],
  ({ theme, xzkuiSize }) => ({
    [`${Control}`]: theme.components.segmentedControl.controlSizes[xzkuiSize],
  }),
);

const XZKUISegmentedControlStyled = {
  Main,
  Control,
};

export default XZKUISegmentedControlStyled;
