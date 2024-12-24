import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgArrowDown = memo(
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
      <path fill="currentColor" d="M11 4v12.175l-5.6-5.6L4 12l8 8 8-8-1.4-1.425-5.6 5.6V4h-2Z" />
    </svg>
  )),
);
SvgArrowDown.displayName = 'SvgArrowDown';
export default SvgArrowDown;
