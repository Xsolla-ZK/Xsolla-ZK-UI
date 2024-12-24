import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgGrid2X2 = memo(
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
      <path fill="currentColor" d="M3 11V3h8v8H3Zm0 10v-8h8v8H3Zm10-10V3h8v8h-8Zm0 10v-8h8v8h-8Z" />
    </svg>
  )),
);
SvgGrid2X2.displayName = 'SvgGrid2X2';
export default SvgGrid2X2;
