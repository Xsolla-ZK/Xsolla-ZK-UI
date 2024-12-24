import { forwardRef, memo } from 'react';
import Styled from './svg-icon.styled';
import type { XZKUISvgIconProps } from './svg-icon.types';
import type { ElementType, ForwardedRef } from 'react';

const XZKUISvgIcon = memo(
  forwardRef(function XZKUISvgIcon<T extends ElementType>(
    {
      icon: SvgComponent,
      iconSize,
      iconColor,
      className,
      component,
      children,
      ...svgProps
    }: XZKUISvgIconProps<T>,
    ref: ForwardedRef<SVGSVGElement>,
  ) {
    if (process.env.NODE_ENV === 'development') {
      if (!SvgComponent.displayName?.startsWith('Svg')) {
        throw new Error(
          `Icon displayName ${SvgComponent.displayName} aren't permitted.\n
        Only ReactElement with displayName starts with Svg are allowed.\n
        Check 'src/components/svg-icons/**' for example.
        `,
        );
      }
    }

    return (
      <Styled.Main as={component} iconSize={iconSize} iconColor={iconColor} className={className}>
        <SvgComponent {...svgProps} ref={ref} />
      </Styled.Main>
    );
  }),
);

export default XZKUISvgIcon;
