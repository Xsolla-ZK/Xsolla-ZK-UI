import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgSwapDiagonal = memo(
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
        d="M3 21v-6h2v2.6l3.1-3.1 1.4 1.4L6.4 19H9v2H3ZM15.9 9.5l-1.4-1.4L17.6 5H15V3h6v6h-2V6.4l-3.1 3.1Z"
      />
    </svg>
  )),
);
SvgSwapDiagonal.displayName = 'SvgSwapDiagonal';
export default SvgSwapDiagonal;
