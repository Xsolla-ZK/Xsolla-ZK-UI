import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgChat = memo(
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
        d="M2 22V4c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 4 2h16c.55 0 1.02.196 1.413.587C21.803 2.98 22 3.45 22 4v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 18H6l-4 4Z"
      />
    </svg>
  )),
);
SvgChat.displayName = 'SvgChat';
export default SvgChat;
