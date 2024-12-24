import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgDiamond = memo(
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
        d="M9.2 8.25 11.85 3h.3l2.65 5.25H9.2Zm2.05 11.85L2.625 9.75h8.625V20.1Zm1.5 0V9.75h8.625L12.75 20.1Zm3.7-11.85L13.85 3H19l2.625 5.25H16.45Zm-14.075 0L5 3h5.15l-2.6 5.25H2.375Z"
      />
    </svg>
  )),
);
SvgDiamond.displayName = 'SvgDiamond';
export default SvgDiamond;
