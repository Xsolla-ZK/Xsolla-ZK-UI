import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgListVertical = memo(
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
        d="M5 11c-.55 0-1.02-.196-1.413-.588A1.926 1.926 0 0 1 3 9V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h14c.55 0 1.02.196 1.413.587C20.803 3.98 21 4.45 21 5v4c0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0 1 19 11H5Zm0 10c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19v-4c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 5 13h14c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v4c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 21H5Z"
      />
    </svg>
  )),
);
SvgListVertical.displayName = 'SvgListVertical';
export default SvgListVertical;
