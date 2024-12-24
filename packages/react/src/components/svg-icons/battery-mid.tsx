import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgBatteryMid = memo(
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
        d="M8 22a.967.967 0 0 1-.713-.288A.968.968 0 0 1 7 21V5c0-.283.096-.52.287-.713A.968.968 0 0 1 8 4h2V2h4v2h2c.283 0 .52.096.712.287.192.192.288.43.288.713v16c0 .283-.096.52-.288.712A.968.968 0 0 1 16 22H8Zm1-10h6V6H9v6Z"
      />
    </svg>
  )),
);
SvgBatteryMid.displayName = 'SvgBatteryMid';
export default SvgBatteryMid;
