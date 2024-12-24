import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgSortDown = memo(
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
      <path fill="currentColor" d="M10 18v-2h4v2h-4Zm-4-5v-2h12v2H6ZM3 8V6h18v2H3Z" />
    </svg>
  )),
);
SvgSortDown.displayName = 'SvgSortDown';
export default SvgSortDown;
