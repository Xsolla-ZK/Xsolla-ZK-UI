import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgShoppingCart = memo(
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
        d="M7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 7 18c.55 0 1.02.196 1.412.587C8.804 18.98 9 19.45 9 20s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 7 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 15 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 17 18c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 22ZM5.2 4h14.75c.383 0 .675.17.875.513.2.341.208.687.025 1.037l-3.55 6.4c-.183.333-.43.592-.738.775A1.945 1.945 0 0 1 15.55 13H8.1L7 15h12v2H7c-.75 0-1.317-.33-1.7-.988-.383-.658-.4-1.312-.05-1.962L6.6 11.6 3 4H1V2h3.25l.95 2Z"
      />
    </svg>
  )),
);
SvgShoppingCart.displayName = 'SvgShoppingCart';
export default SvgShoppingCart;
