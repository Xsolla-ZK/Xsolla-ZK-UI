import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgPhone = memo(
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
        d="M19.95 21c-2.083 0-4.142-.454-6.175-1.363-2.033-.908-3.883-2.195-5.55-3.862-1.667-1.667-2.954-3.517-3.862-5.55C3.454 8.192 3 6.133 3 4.05c0-.3.1-.55.3-.75.2-.2.45-.3.75-.3H8.1a.93.93 0 0 1 .625.237.914.914 0 0 1 .325.563l.65 3.5c.033.267.025.492-.025.675-.05.183-.142.342-.275.475L6.975 10.9c.333.617.73 1.213 1.188 1.787.458.575.962 1.13 1.512 1.663.517.517 1.058.996 1.625 1.438.567.441 1.167.845 1.8 1.212l2.35-2.35a1.4 1.4 0 0 1 .588-.338 1.61 1.61 0 0 1 .712-.062l3.45.7c.233.067.425.188.575.363A.88.88 0 0 1 21 15.9v4.05c0 .3-.1.55-.3.75-.2.2-.45.3-.75.3Z"
      />
    </svg>
  )),
);
SvgPhone.displayName = 'SvgPhone';
export default SvgPhone;
