import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgPlay = memo(
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
      <path fill="currentColor" d="M8 19V5l11 7-11 7Z" />
    </svg>
  )),
);
SvgPlay.displayName = 'SvgPlay';
export default SvgPlay;
