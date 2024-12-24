import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgSun = memo(
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
        d="M12 17c-1.383 0-2.563-.488-3.537-1.463C7.488 14.563 7 13.383 7 12s.487-2.563 1.463-3.537C9.438 7.488 10.617 7 12 7s2.563.487 3.537 1.463C16.512 9.438 17 10.617 17 12s-.488 2.563-1.463 3.537C14.563 16.512 13.383 17 12 17Zm-7-4H1v-2h4v2Zm18 0h-4v-2h4v2ZM11 5V1h2v4h-2Zm0 18v-4h2v4h-2ZM6.4 7.75 3.875 5.325 5.3 3.85l2.4 2.5-1.3 1.4Zm12.3 12.4-2.425-2.525L17.6 16.25l2.525 2.425L18.7 20.15ZM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4-1.4-1.3ZM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525L3.85 18.7Z"
      />
    </svg>
  )),
);
SvgSun.displayName = 'SvgSun';
export default SvgSun;
