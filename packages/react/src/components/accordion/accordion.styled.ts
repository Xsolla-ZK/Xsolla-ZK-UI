import styled from '@emotion/styled';
import { animated } from '@react-spring/web';
import pickCustomColor from '@xsolla-zk/react/utils/color/pick-custom-color';
import type { XZKUIBoardBaseProps } from '../board/board.types';
import type { XZKUIStyledProps } from '@xsolla-zk/react/types/theme';

type StyledProps = XZKUIStyledProps<XZKUIBoardBaseProps>;

const Root = styled('div')<StyledProps>(
  ({ theme, xzkuiBg }) => `
    margin: 0;
    padding: 0;
    list-style: none;
    border-radius: ${theme.common.radius[500]};
    background-color: ${xzkuiBg ? pickCustomColor(theme, xzkuiBg) : theme.theme.overlay.neutral};
    color: ${theme.theme.content.neutralPrimary};
  `,
);

const Header = styled('div')(
  ({ theme }) => `
    display: flex;
    align-items: center;
    gap: ${theme.common.spacing[200]};
    padding: ${theme.common.spacing[200]};
    padding-left: ${theme.common.spacing[350]};
    width: 100%;
    user-select: none;
    cursor: pointer;

    &:not(:first-of-type) {
    }
  `,
);

const HeaderTitle = styled('div')(
  ({ theme }) => `
    flex: 1;
    margin: 0;
    font: ${theme.common.typography.compact[300].default};
  `,
);

const ContentWrapper = styled(animated.div)(
  () => `
    margin: 0;
    overflow: hidden;
    height: 0;
    opacity: 0;
  `,
);

const Content = styled('div')(
  ({ theme }) => `
    padding: ${theme.common.spacing[200]} ${theme.common.spacing[350]};
    margin: 0;
    word-wrap: break-word;
  `,
);

const XZKUIAccordionStyled = {
  Root,
  Header,
  HeaderTitle,
  ContentWrapper,
  Content,
};

export default XZKUIAccordionStyled;
