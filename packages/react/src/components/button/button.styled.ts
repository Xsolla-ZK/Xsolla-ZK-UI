import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/base';
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

const Main = styled(MuiButton)<StyledProps>(
  () => `
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    background: none;
    border: none;
    cursor: pointer;

    &.${xzkuiButtonClasses.fullWidth} {
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
  `,
  ({ theme, xzkuiSize }) => theme.components.button.sizes[xzkuiSize],
  ({ theme, xzkuiVariant }) => theme.components.button.variants[xzkuiVariant],
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
