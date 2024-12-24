import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgChevronLeft = memo(
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
      <path fill="currentColor" d="m10.8 12 4.6-4.6L14 6l-6 6 6 6 1.4-1.4-4.6-4.6Z" />
    </svg>
  )),
);
SvgChevronLeft.displayName = 'SvgChevronLeft';
export default SvgChevronLeft;
