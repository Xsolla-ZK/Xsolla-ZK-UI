import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgCalendar = memo(
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
        d="M5 22c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 20V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 5 4h1V2h2v2h8V2h2v2h1c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 22H5Zm0-2h14V10H5v10Z"
      />
    </svg>
  )),
);
SvgCalendar.displayName = 'SvgCalendar';
export default SvgCalendar;
