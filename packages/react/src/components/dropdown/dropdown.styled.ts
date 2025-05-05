import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Popper as PopperBase } from '@mui/base';
import shouldForwardProp from '@xsolla-zk/react/utils/should-forward-prop';
import type { XZKUIDropdownBaseProps } from './dropdown.types';
import type { XZKUIStyledProps } from '@xsolla-zk/react/types/theme';

type StyledProps = XZKUIStyledProps<XZKUIDropdownBaseProps>;

const Root = styled('div')({
  position: 'relative',
});

const Popper = styled(PopperBase)(
  () => `
    position: absolute;
    z-index: 20;
  `,
);

export const popoverBaseBody = css`
  max-width: 100vw;
  box-shadow: 0px 10px 15px rgba(11, 12, 35, 0.1);
  overflow: hidden;
`;

const Body = styled('div', {
  shouldForwardProp,
})<StyledProps>(
  popoverBaseBody,
  ({ theme }) => `
    background-color: ${theme.theme.layer.floor1};
    box-shadow: ${theme.shadow[500]};
  `,
  ({ theme, xzkuiSize }) => theme.components.dropdown.sizes[xzkuiSize],
);

const PopoverStyled = {
  Root,
  Popper,
  Body,
};

export default PopoverStyled;
