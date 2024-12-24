import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgDoubleArrowDown = memo(
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
        d="m12 19-6-6 1.4-1.4 4.6 4.575 4.6-4.575L18 13l-6 6Zm0-6L6 7l1.4-1.4 4.6 4.575L16.6 5.6 18 7l-6 6Z"
      />
    </svg>
  )),
);
SvgDoubleArrowDown.displayName = 'SvgDoubleArrowDown';
export default SvgDoubleArrowDown;
