import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgBatteryCharge = memo(
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
        d="M16.5 22v-3H14l3.5-5v3H20l-3.5 5ZM8 22a.967.967 0 0 1-.713-.288A.968.968 0 0 1 7 21V5c0-.283.096-.52.287-.713A.968.968 0 0 1 8 4h2V2h4v2h2c.283 0 .52.096.712.287.192.192.288.43.288.713v7c-.35 0-.692.03-1.025.088a5.61 5.61 0 0 0-.975.262V6H9v14h2.35c.133.383.296.742.488 1.075.191.333.42.642.687.925H8Z"
      />
    </svg>
  )),
);
SvgBatteryCharge.displayName = 'SvgBatteryCharge';
export default SvgBatteryCharge;
