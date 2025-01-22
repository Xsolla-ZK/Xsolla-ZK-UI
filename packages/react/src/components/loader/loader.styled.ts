import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import shouldForwardProp from '@xsolla-zk-ui/react/utils/should-forward-prop';
import xzkuiLoaderClasses from './loader.classes';
import type { XZKUILoaderBaseProps } from './loader.types';
import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';

const progress = () => keyframes`
  0% {
    stroke-dasharray: 0 150;
    stroke-dashoffset: 150;
  }
  50% {
    stroke-dasharray: 18 150;
    stroke-dashoffset: 150;
  }
  75% {
    stroke-dasharray: 18 150;
    stroke-dashoffset: 112;
  }
  100% {
    stroke-dasharray: 0 150;
    stroke-dashoffset: 75;
  }
`;

const spinStyles = () => css`
  .spin {
    transform: rotate(-90deg);
    transform-origin: center;
    animation: ${progress()} 1s linear infinite;
  }
`;

type StyledProps = XZKUIStyledProps<XZKUILoaderBaseProps>;

const Root = styled('div', {
  shouldForwardProp,
})<StyledProps>(
  ({ xzkuiSize }) => `
    display: inline-flex;
    align-items: center;
    gap: 0.25em;
    font-size: ${xzkuiSize}px;
    &.${xzkuiLoaderClasses.vertical} {
      flex-direction: column;
    }
    > span {
      font-size: 0.75em;
    }
  `,
  ({ theme, xzkuiVariant, xzkuiMainColor, xzkuiSpinColor }) =>
    !(xzkuiMainColor || xzkuiSpinColor)
      ? theme.components.loader.variants[xzkuiVariant]
      : `
    color: ${xzkuiMainColor || undefined};
    .spin {
      stroke: ${xzkuiSpinColor || undefined};
    }
  `,
  spinStyles,
);

const XZKUILoaderStyled = {
  Root,
};

export default XZKUILoaderStyled;
