import styled from '@emotion/styled';
import xzkuiFieldClasses from './field.classes';

const Root = styled('div')(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    gap: ${theme.common.spacing[200]};
  `,
);

const Row = styled('div')(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.common.spacing[200]};
    padding: 0 ${theme.common.spacing[350]};
    color: ${theme.theme.content.neutralSecondary};

    &.${xzkuiFieldClasses.error} {
      color: ${theme.theme.border.negativePrimary};
    }
  `,
);

const RowTitle = styled('div')(
  ({ theme }) => `
    font: ${theme.common.typography.compact[250].default};
  `,
);

const RowValue = styled('div')(
  ({ theme }) => `
    font: ${theme.common.typography.compact[250].numeric};
  `,
);

const XZKUIFieldStyled = {
  Root,
  Row,
  RowTitle,
  RowValue,
};

export default XZKUIFieldStyled;
