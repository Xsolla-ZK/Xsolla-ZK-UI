import type { XZKUIFieldProps } from '../field/field.types';
import type { XZKUIInputProps } from '../input/input.types';

type PasteErrorCodesUnion = 10 | 20 | 30;

export type XZKUIOtpFieldProps = XZKUIInputProps &
  Omit<XZKUIFieldProps, 'children'> & {
    length?: number;
    values: string;
    onChange?: (val: string) => void;
    onPasteError?: (errorCode: PasteErrorCodesUnion) => void;
  };
