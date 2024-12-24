import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgHome = memo(
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
      <path fill="currentColor" d="M4 21V9l8-6 8 6v12h-6v-7h-4v7H4Z" />
    </svg>
  )),
);
SvgHome.displayName = 'SvgHome';
export default SvgHome;
