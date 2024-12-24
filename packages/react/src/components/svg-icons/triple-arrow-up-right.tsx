import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgTripleArrowUpRight = memo(
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
      <path fill="currentColor" d="m8.798 15.201-6.488-.017v-1.98h8.485v8.485h-1.98l-.017-6.488Z" />
      <path fill="currentColor" d="m6.91 10.58 6.488.018.017 6.487h1.98V8.6H6.91v1.98Z" />
      <path fill="currentColor" d="m11.51 5.98 6.488.018.017 6.487h1.98V4H11.51v1.98Z" />
    </svg>
  )),
);
SvgTripleArrowUpRight.displayName = 'SvgTripleArrowUpRight';
export default SvgTripleArrowUpRight;
