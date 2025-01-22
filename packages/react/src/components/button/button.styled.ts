import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/base';
import shouldForwardProp from '@xsolla-zk-ui/react/utils/should-forward-prop';
import XZKUILoaderStyled from '../loader/loader.styled';
import XZKUISvgIconStyled from '../svg-icon/svg-icon.styled';
import xzkuiButtonClasses from './button.classes';
import type { XZKUIButtonBaseProps } from './button.types';
import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';

type StyledProps = XZKUIStyledProps<XZKUIButtonBaseProps>;

const Text = styled('span')(
  () => `
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `,
);

const Root = styled(MuiButton, {
  shouldForwardProp,
})<StyledProps>(
  ({ theme }) => `
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    background: none;
    border: none;
    overflow: hidden;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      mix-blend-mode: overlay;
      border-radius: inherit;
      background-color: ${theme.theme.overlay.staticLight};
      border: 1px solid ${theme.theme.border.neutralPrimary};
      transition: ${theme.transitions.state};
      transition-property: opacity, background;
      opacity: 0;
    }

    @media (pointer:fine) {
      &:hover {
        &:before {
          opacity: 0.5;
        }
      }
    }

    &.${xzkuiButtonClasses.active} {
      &:before {
        opacity: 0.3;
        background-color: ${theme.theme.background.staticDarkHigh};
      }
    }

    &.${xzkuiButtonClasses.fullWidth} {
      width: 100%;
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

    ${XZKUILoaderStyled.Root},
    ${XZKUISvgIconStyled.Root} {
      font-size: 1.33em;
    }
  `,
  ({ theme, xzkuiSize }) => theme.components.button.sizes[xzkuiSize],
  ({ theme, xzkuiVariant }) => theme.components.button.variants[xzkuiVariant],
  ({ theme }) => `
    &.${xzkuiButtonClasses.disabled} {
      &:before {
        display: none;
      }
      &:not(.${xzkuiButtonClasses.bgOff}) {
        background-color: ${theme.theme.overlay.neutral};
      }
      color: ${theme.theme.content.neutralTertiary};
      cursor: not-allowed;
    }
  `,
);

const Adornment = styled('span')(
  () => `
    display: inline-flex;
  `,
);

const XZKUIButtonStyled = {
  Root,
  Text,
  Adornment,
};

export default XZKUIButtonStyled;
