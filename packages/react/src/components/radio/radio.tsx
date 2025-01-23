import { useSwitch } from '@mui/base';
import clsx from 'clsx';
import { forwardRef } from 'react';
import xzkuiRadioClasses from './radio.classes';
import Styled from './radio.styled';
import type { XZKUIRadioProps } from './radio.types';

const XZKUIRadio = forwardRef<HTMLInputElement, XZKUIRadioProps>(function XZKUIRadio(props, ref) {
  const { label, children, className, bg, color, size = 500, ...rest } = props;
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(rest);

  const hasLabel = Boolean(children || label);

  const stateClasses = [
    checked && xzkuiRadioClasses.checked,
    disabled && xzkuiRadioClasses.disabled,
    focusVisible && xzkuiRadioClasses.focusVisible,
  ];

  return (
    <Styled.Root
      as={hasLabel ? 'label' : 'div'}
      xzkuiSize={size}
      className={clsx(className, stateClasses)}
    >
      <Styled.Input {...rest} {...getInputProps()} role="radio" type="radio" ref={ref} />
      <Styled.Indicator xzkuiBg={bg} xzkuiColor={color} xzkuiSize={size} />
      {hasLabel ? <Styled.Label>{children || label}</Styled.Label> : null}
    </Styled.Root>
  );
});

export default XZKUIRadio;
