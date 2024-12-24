import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgTripleArrowDownLeft = memo(
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
      <path fill="currentColor" d="m15.198 8.798 6.487.017v1.98H13.2V2.31h1.98l.018 6.488Z" />
      <path fill="currentColor" d="m17.085 13.42-6.487-.018-.018-6.488H8.6v8.485h8.485v-1.98Z" />
      <path fill="currentColor" d="m12.485 18.02-6.487-.018-.018-6.488H4v8.485h8.485v-1.98Z" />
    </svg>
  )),
);
SvgTripleArrowDownLeft.displayName = 'SvgTripleArrowDownLeft';
export default SvgTripleArrowDownLeft;
