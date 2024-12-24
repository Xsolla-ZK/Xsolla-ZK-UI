import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgArrowBidirectionalHorizontal = memo(
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
        d="m2 12 7 7 1.425-1.4-4.6-4.6h12.35l-4.6 4.6L15 19l7-7-7-7-1.4 1.4 4.575 4.6H5.825L10.4 6.4 9 5l-7 7Z"
      />
    </svg>
  )),
);
SvgArrowBidirectionalHorizontal.displayName = 'SvgArrowBidirectionalHorizontal';
export default SvgArrowBidirectionalHorizontal;
