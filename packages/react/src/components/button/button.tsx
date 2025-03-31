import { withStaticProperties } from '@tamagui/core';
import useIconsPosition from '@xsolla-zk-ui/react/hooks/use-icons-position';
import { useContext, type ForwardedRef } from 'react';
import Loader from '../loader/loader';
import { ButtonContext, ButtonFrame, ButtonIcon, ButtonText } from './button.styled';
import type { ButtonContextType, ButtonProps } from './button.types';
import type { LoaderProps } from '../loader/loader.types';
import type { TamaguiElement, ThemeName } from '@tamagui/core';

export const ButtonComponent = ButtonFrame.styleable<ButtonProps>(
  ({ children, isLoading, tone = 'brand', ...props }, ref: ForwardedRef<TamaguiElement>) => {
    const iconsPosition = useIconsPosition(children, ButtonIcon);

    return (
      <ButtonFrame
        isLoading={isLoading}
        theme={tone as unknown as ThemeName}
        tone={tone}
        {...iconsPosition}
        {...props}
        ref={ref}
      >
        {isLoading ? <ButtonLoader /> : children}
      </ButtonFrame>
    );
  },
  {
    disableTheme: true,
  },
);

const getLoaderColors = (ctx: ButtonContextType): LoaderProps => {
  const { tone, variant } = ctx;
  if (variant === 'primary') {
    return {
      mainColor: `$border.${tone}-primary`,
      spinColor: `$content.on-${tone}`,
    };
  }

  return {
    mainColor: `$border.${tone}-secondary`,
    spinColor: `$content.${tone}-primary`,
  };
};

function ButtonLoader() {
  const ctx = useContext(ButtonContext);

  return <Loader {...getLoaderColors(ctx)} />;
}

const Button = withStaticProperties(ButtonComponent, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
  Icon: ButtonIcon,
});

export default Button;
