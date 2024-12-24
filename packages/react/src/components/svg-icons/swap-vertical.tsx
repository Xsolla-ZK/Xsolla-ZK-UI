import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgSwapVertical = memo(
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
        d="M8 13V5.825L5.425 8.4 4 7l5-5 5 5-1.425 1.4L10 5.825V13H8Zm7 9-5-5 1.425-1.4L14 18.175V11h2v7.175l2.575-2.575L20 17l-5 5Z"
      />
    </svg>
  )),
);
SvgSwapVertical.displayName = 'SvgSwapVertical';
export default SvgSwapVertical;
