import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgDoubleArrowLeft = memo(
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
        d="m11 18-6-6 6-6 1.4 1.4L7.825 12l4.575 4.6L11 18Zm6.6 0-6-6 6-6L19 7.4 14.425 12 19 16.6 17.6 18Z"
      />
    </svg>
  )),
);
SvgDoubleArrowLeft.displayName = 'SvgDoubleArrowLeft';
export default SvgDoubleArrowLeft;
