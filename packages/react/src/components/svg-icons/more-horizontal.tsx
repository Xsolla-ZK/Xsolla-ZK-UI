import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgMoreHorizontal = memo(
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
        d="M6 14c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 4 12c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 6 10c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412 0 .55-.196 1.02-.588 1.412A1.926 1.926 0 0 1 6 14Zm6 0c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 10 12c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 12 10c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412 0 .55-.196 1.02-.588 1.412A1.926 1.926 0 0 1 12 14Zm6 0c-.55 0-1.02-.196-1.413-.588A1.926 1.926 0 0 1 16 12c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 18 10c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412 0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0 1 18 14Z"
      />
    </svg>
  )),
);
SvgMoreHorizontal.displayName = 'SvgMoreHorizontal';
export default SvgMoreHorizontal;
