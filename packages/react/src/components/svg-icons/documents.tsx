import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgDocuments = memo(
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
        d="M7 20V8.975c0-.55.2-1.017.6-1.4A1.99 1.99 0 0 1 9.025 7H20c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v8l-5 5H9c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 7 20ZM2.025 6.25c-.1-.55.008-1.046.325-1.487.317-.442.75-.713 1.3-.813L14.5 2.025c.55-.1 1.046.008 1.488.325.441.317.712.75.812 1.3L17.05 5H9c-1.1 0-2.042.392-2.825 1.175C5.392 6.958 5 7.9 5 9v9.55a2.25 2.25 0 0 1-.687-.6 1.848 1.848 0 0 1-.363-.85L2.025 6.25ZM20 16h-4v4l4-4Z"
      />
    </svg>
  )),
);
SvgDocuments.displayName = 'SvgDocuments';
export default SvgDocuments;
