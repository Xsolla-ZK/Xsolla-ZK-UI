import styled from '@emotion/styled';
import pickCustomColor from '@xsolla-zk-ui/react/utils/color/pick-custom-color';
import shouldForwardProp from '@xsolla-zk-ui/react/utils/should-forward-prop';
import type { XZKUISemanticTextBaseProps } from './semantic-text.types';
import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';

type StyledProps = XZKUIStyledProps<XZKUISemanticTextBaseProps>;

const Main = styled('div', {
  shouldForwardProp,
})<StyledProps>(
  ({ theme, xzkuiColor }) => `
    display: block;
    color: ${xzkuiColor ? pickCustomColor(theme, xzkuiColor) : theme.theme.content.neutralPrimary};
  `,
  ({ theme, xzkuiVariant }) => theme.components.semanticText.variants[xzkuiVariant],
);

const XZKUISemanticTextStyled = {
  Main,
};

export default XZKUISemanticTextStyled;
