import styled from '@emotion/styled';
import pickCustomColor from '@xsolla-zk/react/utils/color/pick-custom-color';
import shouldForwardProp from '@xsolla-zk/react/utils/should-forward-prop';
import xzkuiRadioClasses from './radio.classes';
import type { XZKUIRadioBaseProps } from './radio.types';
import type { XZKUIStyledProps } from '@xsolla-zk/react/types/theme';

type StyledProps = XZKUIStyledProps<XZKUIRadioBaseProps>;

const Root = styled('div')<Pick<StyledProps, 'xzkuiSize'>>(
  ({ theme }) => `
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    cursor: pointer;
    color: ${theme.theme.content.neutralPrimary};
    transform: none;

    &.${xzkuiRadioClasses.focusVisible} {
      outline: auto;
    }

    &.${xzkuiRadioClasses.disabled} {
      cursor: not-allowed;
    }
  `,
  ({ theme, xzkuiSize }) => theme.components.radio.sizes[xzkuiSize],
);

const Indicator = styled('span', {
  shouldForwardProp,
})<StyledProps>(
  ({ theme, xzkuiBg, xzkuiColor }) => `
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.common.radius[999]};
    border-style: solid;
    border-color: ${theme.theme.border.neutralSecondary};
    background-color: ${theme.theme.overlay.neutral};
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: inherit;
      background-color: ${theme.theme.background.neutralHigh};
      mix-blend-mode: color-dodge;
      transition: ${theme.transitions.state};
      transition-property: opacity, background;
      opacity: 0;
    }

    &:after {
      content: '';
      width: 0;
      height: 0;
      border-radius: inherit;
      background-color: ${xzkuiColor ? pickCustomColor(theme, xzkuiColor) : theme.theme.content.staticDarkPrimary};
      transition: ${theme.transitions.state};
      transition-property: width, height, background;
    }

    .${xzkuiRadioClasses.checked} & {
      background-color: ${xzkuiBg ? pickCustomColor(theme, xzkuiBg) : theme.theme.background.brandHigh};
    }

    .${xzkuiRadioClasses.disabled} & {
      background-color: ${theme.theme.overlay.neutral};
      &:before {
        border-color: ${theme.theme.border.neutralTertiary};
      }
      &:after {
        background-color: ${theme.theme.content.neutralTertiary};
      }
    }
  `,
  ({ theme, xzkuiSize }) => {
    const box = theme.components.radio.box.sizes[xzkuiSize];

    return {
      ...box,
      [`&:before`]: {
        top: `-${box.borderWidth}`,
        left: `-${box.borderWidth}`,
        right: `-${box.borderWidth}`,
        bottom: `-${box.borderWidth}`,
      },
      [`.${xzkuiRadioClasses.checked} &:after`]: theme.components.radio.indicator.sizes[xzkuiSize],
    };
  },
);

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

    @media (pointer: fine) {
      &:not([disabled]):hover + ${Indicator} {
        &:before {
          opacity: 1;
        }
      }
    }
  `,
);

const Label = styled('span')(
  () => `
    flex: 1;
  `,
);

const XZKUIRadioStyled = {
  Root,
  Input,
  Indicator,
  Label,
};

export default XZKUIRadioStyled;
