import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgTripleArrowLeft = memo(
  forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="m1.4 12 6 6 1.4-1.4L4.225 12 8.8 7.4 7.4 6l-6 6Z" />
      <path fill="currentColor" d="m8 12 6 6 1.4-1.4-4.575-4.6L15.4 7.4 14 6l-6 6Z" />
      <path fill="currentColor" d="m14.6 12 6 6 1.4-1.4-4.575-4.6L22 7.4 20.6 6l-6 6Z" />
    </svg>
  )),
);
SvgTripleArrowLeft.displayName = 'SvgTripleArrowLeft';
export default SvgTripleArrowLeft;
