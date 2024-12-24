import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgArrowBidirectionalVertical = memo(
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
        d="m5 9 7-7 7 7-1.4 1.425-4.6-4.6v12.35l4.6-4.6L19 15l-7 7-7-7 1.4-1.4 4.6 4.575V5.825L6.4 10.4 5 9Z"
      />
    </svg>
  )),
);
SvgArrowBidirectionalVertical.displayName = 'SvgArrowBidirectionalVertical';
export default SvgArrowBidirectionalVertical;
