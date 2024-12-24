import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgTripleArrowUp = memo(
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
      <path
        fill="currentColor"
        d="m6 8 1.4 1.4L12 4.825 16.6 9.4 18 8l-6-6-6 6ZM6 20l1.4 1.4 4.6-4.575 4.6 4.575L18 20l-6-6-6 6Z"
      />
      <path fill="currentColor" d="m6 14 1.4 1.4 4.6-4.575 4.6 4.575L18 14l-6-6-6 6Z" />
    </svg>
  )),
);
SvgTripleArrowUp.displayName = 'SvgTripleArrowUp';
export default SvgTripleArrowUp;
