import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import xzkuiLoaderClasses from './loader.classes';
import type { XZKUILoaderBaseProps } from './loader.types';

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

const Main = styled('div')<XZKUILoaderBaseProps>(
  ({ size }) => `
    display: inline-flex;
    align-items: center;
    gap: 0.25em;
    font-size: ${size}px;
    &.${xzkuiLoaderClasses.vertical} {
      flex-direction: column;
    }
    > span {
      font-size: 0.75em;
    }
  `,
  ({ theme, variant, mainColor, spinColor }) =>
    !(mainColor || spinColor)
      ? theme.components.loader.variants[variant]
      : `
    color: ${mainColor || undefined};
    .spin {
      stroke: ${spinColor || undefined};
    }
  `,
  spinStyles,
);

const XZKUILoaderStyled = {
  Main,
};

export default XZKUILoaderStyled;
