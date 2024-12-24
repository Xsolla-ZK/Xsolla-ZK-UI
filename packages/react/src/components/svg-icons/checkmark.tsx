import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgCheckmark = memo(
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
        d="m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4 9.55 18Z"
      />
    </svg>
  )),
);
SvgCheckmark.displayName = 'SvgCheckmark';
export default SvgCheckmark;
