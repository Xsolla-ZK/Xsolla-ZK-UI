import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgNavChevronRight = memo(
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
        d="M8.025 22 6.25 20.225 14.475 12 6.25 3.775 8.025 2l10 10-10 10Z"
      />
    </svg>
  )),
);
SvgNavChevronRight.displayName = 'SvgNavChevronRight';
export default SvgNavChevronRight;
