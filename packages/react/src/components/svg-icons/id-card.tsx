import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgIdCard = memo(
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
        d="M14 13h5v-2h-5v2Zm0-3h5V8h-5v2Zm-9 6h8v-.55c0-.75-.367-1.346-1.1-1.787C11.167 13.22 10.2 13 9 13s-2.167.22-2.9.662C5.367 14.104 5 14.7 5 15.45V16Zm4-4c.55 0 1.02-.196 1.412-.588.392-.391.588-.862.588-1.412 0-.55-.196-1.02-.588-1.412A1.926 1.926 0 0 0 9 8c-.55 0-1.02.196-1.412.588A1.926 1.926 0 0 0 7 10c0 .55.196 1.02.588 1.412.391.392.862.588 1.412.588Zm-5 8c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 18V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 4h16c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 20H4Z"
      />
    </svg>
  )),
);
SvgIdCard.displayName = 'SvgIdCard';
export default SvgIdCard;
