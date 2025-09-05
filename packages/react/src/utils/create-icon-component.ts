import { cloneElement, createElement, isValidElement } from 'react';
import type { XORIconProps } from '../types/icon';
import type { IconProps } from '@xsolla-zk/ui-primitives';

const defaultProps = {
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto',
};

export function createIconComponent({ icon, children, ...rest }: XORIconProps) {
  if (icon) {
    return createElement(icon, {
      ...defaultProps,
      ...rest,
    } as IconProps);
  }

  return isValidElement(children)
    ? cloneElement(children, {
        ...defaultProps,
        ...rest,
      } as {})
    : null;
}
