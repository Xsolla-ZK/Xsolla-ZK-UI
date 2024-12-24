import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgListHorizontal = memo(
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
        d="M5 19c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 17V7c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 5 5h1.325c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412v10c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 6.324 19H5Zm6.325 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 9.325 17V7c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 11.325 5h1.325c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412v10c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 12.65 19h-1.325Zm6.325 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 15.65 17V7c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 17.65 5h1.325c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412v10c0 .55-.196 1.02-.588 1.413a1.926 1.926 0 0 1-1.412.587H17.65Z"
      />
    </svg>
  )),
);
SvgListHorizontal.displayName = 'SvgListHorizontal';
export default SvgListHorizontal;
