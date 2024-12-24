import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgDataTable = memo(
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
        d="M3 8V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h14c.55 0 1.02.196 1.413.587C20.803 3.98 21 4.45 21 5v3H3Zm2 13c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19v-9h4.5v11H5Zm11.5 0V10H21v9c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 21h-2.5Zm-7 0V10h5v11h-5Z"
      />
    </svg>
  )),
);
SvgDataTable.displayName = 'SvgDataTable';
export default SvgDataTable;
