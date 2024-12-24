import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgChevronDown = memo(
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
      <path fill="currentColor" d="m12 15.4-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4l-6 6Z" />
    </svg>
  )),
);
SvgChevronDown.displayName = 'SvgChevronDown';
export default SvgChevronDown;
