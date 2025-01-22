import styled from '@emotion/styled';
import pickCustomColor from '@xsolla-zk-ui/react/utils/color/pick-custom-color';
import XZKUIRichIcon from '../rich-icon/rich-icon';
import xzkuiBoardClasses from './board.classes';
import type { XZKUIBoardBaseProps } from './board.types';
import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';

type StyledProps = XZKUIStyledProps<XZKUIBoardBaseProps>;

const Root = styled('div')<StyledProps>(
  ({ theme, xzkuiBg }) => `
    position: relative;
    padding: ${theme.common.spacing[350]};
    border-radius: ${theme.common.radius[550]};
    background-color: ${xzkuiBg ? pickCustomColor(theme, xzkuiBg) : theme.theme.overlay.neutral};

    &.${xzkuiBoardClasses.isClosable} {
      min-height: 72px;
      padding-right: ${parseInt(theme.common.spacing[350]) * 2 + 24 + 'px'};
    }
  `,
);

const Control = styled(XZKUIRichIcon)(
  ({ theme }) => `
    position: absolute;
    padding: ${theme.common.spacing[200]};
    top: ${theme.common.spacing[200]};
    right: ${theme.common.spacing[200]};
  `,
);

const XZKUIBoardStyled = {
  Root,
  Control,
};

export default XZKUIBoardStyled;
