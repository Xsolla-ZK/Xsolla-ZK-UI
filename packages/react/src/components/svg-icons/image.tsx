import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgImage = memo(
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
        d="M5 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h14c.55 0 1.02.196 1.413.587C20.803 3.98 21 4.45 21 5v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Zm2.5-7c.417 0 .77-.146 1.063-.438.291-.291.437-.645.437-1.062 0-.417-.146-.77-.438-1.063A1.447 1.447 0 0 0 8.5 7c-.417 0-.77.146-1.063.438A1.447 1.447 0 0 0 7 8.5c0 .417.146.77.438 1.063.291.291.645.437 1.062.437Z"
      />
    </svg>
  )),
);
SvgImage.displayName = 'SvgImage';
export default SvgImage;
