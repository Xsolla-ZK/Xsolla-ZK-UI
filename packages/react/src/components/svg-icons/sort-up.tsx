import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgSortUp = memo(
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
      <path fill="currentColor" d="M10 6v2h4V6h-4Zm-4 5v2h12v-2H6Zm-3 5v2h18v-2H3Z" />
    </svg>
  )),
);
SvgSortUp.displayName = 'SvgSortUp';
export default SvgSortUp;
