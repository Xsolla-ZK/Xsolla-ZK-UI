import { forwardRef, useState } from 'react';
import Field from '../field/field';
import XZKUIRichIcon from '../rich-icon/rich-icon';
import XZKUISvgIcon from '../svg-icon/svg-icon';
import SvgCross from '../svg-icons/cross';
import SvgEye from '../svg-icons/eye';
import SvgEyeSlash from '../svg-icons/eye-slash';
import type { XZKUIPasswordFieldProps } from './password-field.types';
import type { ChangeEvent, ForwardedRef, MouseEvent } from 'react';

// className={clsx(state.show && 'password-hide')}

const XZKUIPasswordField = forwardRef(function XZKUIPasswordField(
  props: XZKUIPasswordFieldProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    onChange,
    value,
    className,
    label,
    labelValue,
    error,
    errorValue,
    hint,
    hintValue,
    ...rest
  } = props;
  const [localValue, setValue] = useState(() => value ?? '');

  const [show, setShow] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange?.(event);
  };

  const handleClear = () => setValue('');

  const handleClickShowPassword = () => {
    setShow((prev) => !prev);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Field
      className={className}
      label={label}
      labelValue={labelValue}
      error={error}
      errorValue={errorValue}
      hint={hint}
      hintValue={hintValue}
    >
      <Field.Control
        type={show ? 'text' : 'password'}
        value={localValue}
        onChange={handleChange}
        endAdornment={
          <>
            <XZKUIRichIcon
              component="button"
              shape="squircle"
              size={200}
              bg={({ theme }) => theme.overlay.neutral}
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              <XZKUISvgIcon icon={show ? SvgEyeSlash : SvgEye} />
            </XZKUIRichIcon>
            {localValue && (
              <XZKUIRichIcon
                component="button"
                shape="squircle"
                size={200}
                bg={({ theme }) => theme.overlay.neutral}
                onClick={handleClear}
              >
                <XZKUISvgIcon icon={SvgCross} />
              </XZKUIRichIcon>
            )}
          </>
        }
        {...rest}
        ref={ref}
      />
    </Field>
  );
});

export default XZKUIPasswordField;
