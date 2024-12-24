import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgSwapHorizontal = memo(
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
        d="m7 20-5-5 5-5 1.4 1.425L5.825 14H13v2H5.825L8.4 18.575 7 20Zm10-6-1.4-1.425L18.175 10H11V8h7.175L15.6 5.425 17 4l5 5-5 5Z"
      />
    </svg>
  )),
);
SvgSwapHorizontal.displayName = 'SvgSwapHorizontal';
export default SvgSwapHorizontal;
