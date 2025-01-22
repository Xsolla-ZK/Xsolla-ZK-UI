import styled from '@emotion/styled';
import shouldForwardProp from '@xsolla-zk-ui/react/utils/should-forward-prop';
import xzkuiCheckboxClasses from './checkbox.classes';
import type { XZKUICheckboxBaseProps } from './checkbox.types';
import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';

type StyledProps = XZKUIStyledProps<XZKUICheckboxBaseProps>;

const Input = styled('input')(
  () => `
    cursor: inherit;
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    margin: 0px;
    padding: 0px;
    z-index: 1;
  `,
);

const Icon = styled('span')(
  ({ theme }) => `
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-color: ${theme.theme.border.neutralSecondary};
    background-color: ${theme.theme.overlay.neutral};
    overflow: hidden;
    color: ${theme.theme.content.staticDarkPrimary};

    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      mix-blend-mode: color-burn;
      background-color: ${theme.theme.background.neutralHigh};
      transition: ${theme.transitions.state};
      transition-property: opacity, background;
      opacity: 0;
    }

    .${xzkuiCheckboxClasses.checked} & {
      background-color: ${theme.theme.background.brandHigh};
      border-color: ${theme.theme.border.brandPrimary};
    }

    .${xzkuiCheckboxClasses.disabled} & {
      background-color: ${theme.theme.overlay.neutral};
      border-color: ${theme.theme.border.neutralTertiary};
    }
  `,
);

const Label = styled('span')(
  () => `
    flex: 1;
    font-size: 0.875em;
    line-height: 1.143em;
  `,
);

const Root = styled('div', {
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
    cursor: pointer;
    overflow: hidden;
    color: ${theme.theme.content.neutralPrimary};

    &.${xzkuiCheckboxClasses.focusVisible} {
      outline: auto;
    }

    &.${xzkuiCheckboxClasses.disabled} {
      cursor: not-allowed;
    }
  `,

  ({ theme, xzkuiSize }) => theme.components.checkbox.sizes[xzkuiSize],
  ({ theme, xzkuiSize }) => ({
    [`${Icon}`]: theme.components.checkbox.icon.sizes[xzkuiSize],
  }),
);

const XZKUICheckboxStyled = {
  Root,
  Input,
  Icon,
  Label,
};

export default XZKUICheckboxStyled;
