import type { XZKUIFieldProps } from '../field/field.types';
import type { XZKUIInputProps } from '../input/input.types';

export type XZKUIPasswordFieldProps = XZKUIInputProps & Omit<XZKUIFieldProps, 'children'>;
