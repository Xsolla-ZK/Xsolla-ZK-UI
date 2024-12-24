import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgLogin = memo(
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
        d="M12 21v-2h7V5h-7V3h7c.55 0 1.02.196 1.413.587C20.803 3.98 21 4.45 21 5v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 21h-7Zm-2-4-1.375-1.45 2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5-5 5Z"
      />
    </svg>
  )),
);
SvgLogin.displayName = 'SvgLogin';
export default SvgLogin;
