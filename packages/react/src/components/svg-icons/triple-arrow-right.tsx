import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgTripleArrowRight = memo(
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
      <path fill="currentColor" d="M2 7.4 6.575 12 2 16.6 3.4 18l6-6-6-6L2 7.4Z" />
      <path fill="currentColor" d="m8.6 7.4 4.575 4.6L8.6 16.6 10 18l6-6-6-6-1.4 1.4Z" />
      <path fill="currentColor" d="m15.2 7.4 4.575 4.6-4.575 4.6 1.4 1.4 6-6-6-6-1.4 1.4Z" />
    </svg>
  )),
);
SvgTripleArrowRight.displayName = 'SvgTripleArrowRight';
export default SvgTripleArrowRight;
