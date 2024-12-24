import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgCollapseDiagonal = memo(
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
        d="M3.4 22 2 20.6 8.6 14H4v-2h8v8h-2v-4.6L3.4 22ZM12 12V4h2v4.6L20.6 2 22 3.4 15.4 10H20v2h-8Z"
      />
    </svg>
  )),
);
SvgCollapseDiagonal.displayName = 'SvgCollapseDiagonal';
export default SvgCollapseDiagonal;
