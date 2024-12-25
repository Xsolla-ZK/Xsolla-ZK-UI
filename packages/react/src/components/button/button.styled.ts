import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/base';
import XZKUILoaderStyled from '../loader/loader.styled';
import XZKUISvgIconStyled from '../svg-icon/svg-icon.styled';
import xzkuiButtonClasses from './button.classes';
import type { XZKUIButtonBaseProps } from './button.types';
import type { RequiredOnly } from '@xsolla-zk-ui/react/types/helpers';

const Text = styled('span')(
  () => `
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `,
);

const Main = styled(MuiButton)<RequiredOnly<XZKUIButtonBaseProps, 'size' | 'variant'>>(
  () => `
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    background: none;
    border: none;
    cursor: pointer;

    &.${xzkuiButtonClasses.full} {
      width: 100%;
    }

    &.${xzkuiButtonClasses.disabled} {
      cursor: not-allowed;
    }

    &.${xzkuiButtonClasses.loading} {
      pointer-events: none;
    }

    &.${xzkuiButtonClasses.extraSpaces} {
      ${Text} {
        padding-left: 0.33em;
        padding-right: 0.33em;
      }
    }

    ${XZKUILoaderStyled.Main},
    ${XZKUISvgIconStyled.Main} {
      font-size: 1.33em;
    }
    ${XZKUISvgIconStyled.Main} {
      color: inherit;
    }
  `,
  ({ theme, size }) => theme.components.button.sizes[size],
  ({ theme, variant }) => theme.components.button.variants[variant],
);

const Adornment = styled('span')(
  () => `
    display: inline-flex;
  `,
);

const XZKUIButtonStyled = {
  Main,
  Text,
  Adornment,
};

export default XZKUIButtonStyled;
