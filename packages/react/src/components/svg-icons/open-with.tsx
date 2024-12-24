import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgOpenWith = memo(
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
        d="m12 22-4.25-4.25 1.425-1.425L11 18.15V14h2v4.125l1.8-1.825 1.45 1.45L12 22Zm-5.75-5.75L2 12l4.225-4.225L7.65 9.2 5.85 11H10v2H5.875L7.7 14.8l-1.45 1.45Zm11.5 0-1.425-1.425L18.15 13H14v-2h4.125L16.3 9.2l1.45-1.45L22 12l-4.25 4.25ZM11 10V5.85L9.175 7.675 7.75 6.25 12 2l4.25 4.25-1.425 1.425L13 5.85V10h-2Z"
      />
    </svg>
  )),
);
SvgOpenWith.displayName = 'SvgOpenWith';
export default SvgOpenWith;
