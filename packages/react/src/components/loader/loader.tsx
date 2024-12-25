import { forwardRef } from 'react';
import Styled from './loader.styled';
import type { XZKUILoaderProps } from './loader.types';

const XZKUILoader = forwardRef<HTMLDivElement, XZKUILoaderProps>(function XZKUILoader(
  { children, variant = 'default', size = 24, ...props },
  ref,
) {
  return (
    <Styled.Main size={size} variant={variant} ref={ref} {...props}>
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
    </Styled.Main>
  );
});

export default XZKUILoader;
