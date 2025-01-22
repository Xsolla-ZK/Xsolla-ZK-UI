import { Input as MuiInput } from '@mui/base';
import clsx from 'clsx';
import { forwardRef } from 'react';
import xzkuiInputClasses from './input.classes';
import InputStyled from './input.styled';
import type { XZKUIInputBaseProps, XZKUIInputProps } from './input.types';
import type { InputOwnerState, SlotComponentProps } from '@mui/base';
import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';
import type { ForwardedRef, ReactNode } from 'react';

const XZKUIInput = forwardRef(function CustomInput(
  props: XZKUIInputProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    slots,
    slotProps,
    inputMode,
    onKeyDown,
    startAdornment,
    endAdornment,
    size = 500,
    fullWidth,
    className,
    ...other
  } = props;

  return (
    <MuiInput
      slots={{
        root: InputStyled.Root,
        input: InputStyled.Element,
        textarea: InputStyled.TextareaElement,
        ...slots,
      }}
      slotProps={{
        root: {
          ...slotProps?.root,
          xzkuiSize: size,
        } as SlotComponentProps<'div', XZKUIStyledProps<XZKUIInputBaseProps>, InputOwnerState>,
        input: {
          inputMode,
          onKeyDown: (e) => {
            if (e.key === '/') e.stopPropagation();
            onKeyDown?.(e);
          },
          ...slotProps?.input,
        },
      }}
      startAdornment={renderAdornment(startAdornment)}
      endAdornment={renderAdornment(endAdornment)}
      className={clsx(className, [
        fullWidth && xzkuiInputClasses.fullWidth,
        other.readOnly && xzkuiInputClasses.readOnly,
      ])}
      {...other}
      ref={ref}
    />
  );
});

function renderAdornment(value?: ReactNode) {
  return value != null && value !== '' && <InputStyled.Adornment>{value}</InputStyled.Adornment>;
}

export default XZKUIInput;
