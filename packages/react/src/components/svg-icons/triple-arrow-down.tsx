import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgTripleArrowDown = memo(
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
        d="m6 4 6 6 6-6-1.4-1.4L12 7.175 7.4 2.6 6 4ZM6 16l6 6 6-6-1.4-1.4-4.6 4.575L7.4 14.6 6 16Z"
      />
      <path fill="currentColor" d="m6 10 6 6 6-6-1.4-1.4-4.6 4.575L7.4 8.6 6 10Z" />
    </svg>
  )),
);
SvgTripleArrowDown.displayName = 'SvgTripleArrowDown';
export default SvgTripleArrowDown;
