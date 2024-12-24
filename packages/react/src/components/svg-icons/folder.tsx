import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgFolder = memo(
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
        d="M4 20c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 18V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 4h6l2 2h8c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v10c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 20H4Z"
      />
    </svg>
  )),
);
SvgFolder.displayName = 'SvgFolder';
export default SvgFolder;
