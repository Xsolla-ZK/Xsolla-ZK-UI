import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgCash = memo(
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
        d="M3 20c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 1 18V7h2v11h17v2H3Zm4-4c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 5 14V6c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 7 4h14c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v8c0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0 1 21 16H7Zm2-2c0-.55-.196-1.02-.588-1.412A1.926 1.926 0 0 0 7 12v2h2Zm10 0h2v-2c-.55 0-1.02.196-1.413.588A1.926 1.926 0 0 0 19 14Zm-5-1c.833 0 1.542-.292 2.125-.875A2.893 2.893 0 0 0 17 10c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 14 7c-.833 0-1.542.292-2.125.875A2.893 2.893 0 0 0 11 10c0 .833.292 1.542.875 2.125A2.893 2.893 0 0 0 14 13ZM7 8c.55 0 1.02-.196 1.412-.588C8.804 7.021 9 6.55 9 6H7v2Zm14 0V6h-2c0 .55.196 1.02.587 1.412C19.98 7.804 20.45 8 21 8Z"
      />
    </svg>
  )),
);
SvgCash.displayName = 'SvgCash';
export default SvgCash;
