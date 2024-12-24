import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgExpandDiagonal = memo(
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
      <path fill="currentColor" d="M3 21v-8h2v4.6L17.6 5H13V3h8v8h-2V6.4L6.4 19H11v2H3Z" />
    </svg>
  )),
);
SvgExpandDiagonal.displayName = 'SvgExpandDiagonal';
export default SvgExpandDiagonal;
