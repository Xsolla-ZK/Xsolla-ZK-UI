import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgThumbUp = memo(
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
        d="M18 21H8V8l7-7 1.25 1.25c.117.117.212.275.288.475.075.2.112.392.112.575v.35L15.55 8H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2a2.04 2.04 0 0 1-.15.75l-3 7.05c-.15.333-.4.617-.75.85-.35.233-.717.35-1.1.35ZM6 8v13H2V8h4Z"
      />
    </svg>
  )),
);
SvgThumbUp.displayName = 'SvgThumbUp';
export default SvgThumbUp;
