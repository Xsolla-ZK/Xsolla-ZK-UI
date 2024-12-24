import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgPause = memo(
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
      <path fill="currentColor" d="M14 19V5h4v14h-4Zm-8 0V5h4v14H6Z" />
    </svg>
  )),
);
SvgPause.displayName = 'SvgPause';
export default SvgPause;
