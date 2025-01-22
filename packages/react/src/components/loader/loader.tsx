import clsx from 'clsx';
import { forwardRef } from 'react';
import xzkuiLoaderClasses from './loader.classes';
import Styled from './loader.styled';
import type { XZKUILoaderProps } from './loader.types';

const XZKUILoader = forwardRef<HTMLDivElement, XZKUILoaderProps>(function XZKUILoader(
  { children, variant = 'default', size = 24, className, vertical, mainColor, spinColor, ...props },
  ref,
) {
  return (
    <Styled.Root
      xzkuiSize={size}
      xzkuiVariant={variant}
      xzkuiMainColor={mainColor}
      xzkuiSpinColor={spinColor}
      ref={ref}
      className={clsx([className, vertical && xzkuiLoaderClasses.vertical])}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 28 28"
      >
        <circle cx={14} cy={14} r={12} strokeWidth={4} stroke="currentColor" />
        <circle
          className="spin"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDashoffset={150}
          strokeDasharray="0 150"
          strokeWidth={4}
          cx={14}
          cy={14}
          r={12}
        />
      </svg>
      {children && <span>{children}</span>}
    </Styled.Root>
  );
});

export default XZKUILoader;
