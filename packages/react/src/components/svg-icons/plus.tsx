import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgPlus = memo(
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
      <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z" />
    </svg>
  )),
);
SvgPlus.displayName = 'SvgPlus';
export default SvgPlus;
