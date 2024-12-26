import styled from '@emotion/styled';
import type { XZKUISemanticTextBaseProps } from './semantic-text.types';
import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';

type StyledProps = XZKUIStyledProps<XZKUISemanticTextBaseProps>;

const Main = styled('div')<StyledProps>(
  ({ theme }) => `
    display: flex;
    align-items: baseline;
    color: ${theme.theme.content.neutralPrimary};
  `,
  ({ theme, xzkuiVariant }) => theme.components.semanticText.variants[xzkuiVariant],
);

const Value = styled('span')(
  ({ theme }) => `
    font-weight: ${theme.common.typography.fontWeight.text.default};
    font-size: ${theme.common.typography.fontSize[250]};
    line-height: ${theme.common.typography.lineHeight.default[250]};
    color: ${theme.theme.content.neutralSecondary};
  `,
);

const XZKUISemanticTextStyled = {
  Main,
  Value,
};

export default XZKUISemanticTextStyled;
