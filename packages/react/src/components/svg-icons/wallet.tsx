import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgWallet = memo(
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
        d="M6 20c-1.1 0-2.042-.392-2.825-1.175C2.392 18.042 2 17.1 2 16V8c0-1.1.392-2.042 1.175-2.825C3.958 4.392 4.9 4 6 4h12c1.1 0 2.042.392 2.825 1.175C21.608 5.958 22 6.9 22 8v8c0 1.1-.392 2.042-1.175 2.825C20.042 19.608 19.1 20 18 20H6ZM6 8h12c.367 0 .717.042 1.05.125.333.083.65.217.95.4V8c0-.55-.196-1.02-.587-1.412A1.926 1.926 0 0 0 18 6H6c-.55 0-1.02.196-1.412.588A1.926 1.926 0 0 0 4 8v.525c.3-.183.617-.317.95-.4A4.315 4.315 0 0 1 6 8Zm-1.85 3.25 11.125 2.7c.15.033.3.033.45 0 .15-.033.292-.1.425-.2l3.475-2.9a2.163 2.163 0 0 0-.7-.612A1.865 1.865 0 0 0 18 10H6c-.433 0-.813.113-1.138.338-.325.225-.562.529-.712.912Z"
      />
    </svg>
  )),
);
SvgWallet.displayName = 'SvgWallet';
export default SvgWallet;
