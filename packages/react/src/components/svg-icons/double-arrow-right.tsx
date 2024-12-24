import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgDoubleArrowRight = memo(
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
        d="M9.575 12 5 7.4 6.4 6l6 6-6 6L5 16.6 9.575 12Zm6.6 0L11.6 7.4 13 6l6 6-6 6-1.4-1.4 4.575-4.6Z"
      />
    </svg>
  )),
);
SvgDoubleArrowRight.displayName = 'SvgDoubleArrowRight';
export default SvgDoubleArrowRight;
