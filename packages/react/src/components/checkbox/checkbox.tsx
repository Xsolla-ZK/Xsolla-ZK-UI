import { useSwitch } from '@mui/base';
import clsx from 'clsx';
import { forwardRef } from 'react';
import XZKUISvgIcon from '../svg-icon/svg-icon';
import SvgCheckmark from '../svg-icons/checkmark';
import xzkuiCheckboxClasses from './checkbox.classes';
import Styled from './checkbox.styled';
import type { XZKUICheckboxProps } from './checkbox.types';

const XZKUICheckbox = forwardRef<HTMLInputElement, XZKUICheckboxProps>(
  function XZKUICheckbox(props, ref) {
    const { label, children, className, bg, color, size = 500, ...rest } = props;
    const { getInputProps, checked, disabled, focusVisible } = useSwitch(rest);

    const hasLabel = Boolean(children || label);

    const stateClasses = [
      checked && xzkuiCheckboxClasses.checked,
      disabled && xzkuiCheckboxClasses.disabled,
      focusVisible && xzkuiCheckboxClasses.focusVisible,
    ];

    return (
      <Styled.Root
        as={hasLabel ? 'label' : 'div'}
        xzkuiSize={size}
        className={clsx(className, stateClasses)}
      >
        <Styled.Input {...rest} {...getInputProps()} role="checkbox" type="checkbox" ref={ref} />
        <Styled.Indicator xzkuiBg={bg} xzkuiColor={color} xzkuiSize={size}>
          {checked ? <XZKUISvgIcon icon={SvgCheckmark} /> : null}
        </Styled.Indicator>
        {hasLabel ? <Styled.Label>{children || label}</Styled.Label> : null}
      </Styled.Root>
    );
  },
);

export default XZKUICheckbox;
