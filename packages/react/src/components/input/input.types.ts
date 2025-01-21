import type { inputThemeSizes } from './input.theme';
import type { InputProps } from '@mui/base';

type Sizes = (typeof inputThemeSizes)[number];

export interface XZKUIInputBaseProps {
  size: Sizes;
}

export type XZKUIInputProps = InputProps &
  Partial<XZKUIInputBaseProps> & {
    fullWidth?: boolean;
  };
