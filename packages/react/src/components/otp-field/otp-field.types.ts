import type { FieldSizes } from '../field/field.types';
import type { InputProps } from '../input';

export type OTPFieldPasteErrorCodesUnion = 10 | 20 | 30;

export type OTPFieldProps = Omit<InputProps, 'onChange' | 'size'> & {
  size?: FieldSizes;
  length?: number;
  onChange?: (val: string) => void;
  onPasteError?: (errorCode: OTPFieldPasteErrorCodesUnion) => void;
  onFill?: (val: string) => void;
};
