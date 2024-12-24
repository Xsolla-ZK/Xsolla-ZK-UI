import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgMinus = memo(
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
      <path fill="currentColor" d="M5 13v-2h14v2H5Z" />
    </svg>
  )),
);
SvgMinus.displayName = 'SvgMinus';
export default SvgMinus;
