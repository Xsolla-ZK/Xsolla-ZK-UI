import { withStaticProperties } from '@tamagui/core';
import { forwardRef } from 'react';
import { useIconsPosition } from '../../hooks';
import { processMediaValues } from '../../utils';
import { Loader } from '../loader';
import { ButtonContext, ButtonFrame, ButtonIcon, ButtonText } from './button.styled';
import type { ButtonProps } from './button.types';
import type { LoaderProps } from '../loader/loader.types';
import type { ColorTokens, TamaguiElement, ThemeName } from '@tamagui/core';

const ButtonComponent = forwardRef<TamaguiElement, ButtonProps>(
  ({ children, tone = 'brand', isLoading, ...propsIn }, ref) => {
    const iconsPosition = useIconsPosition(children, ButtonIcon);

    const providerValue = {
      tone,
      disabled: propsIn.disabled,
      ...iconsPosition,
    };

    return (
      <ButtonContext.Provider componentProps={propsIn} {...providerValue}>
        <ButtonFrame
          isLoading={isLoading}
          theme={tone as unknown as ThemeName}
          tone={tone}
          {...iconsPosition}
          {...propsIn}
          ref={ref}
        >
          {isLoading ? <ButtonLoader /> : children}
        </ButtonFrame>
      </ButtonContext.Provider>
    );
  },
);

function ButtonLoader() {
  const ctx = ButtonContext.useStyledContext();

  const { size, variant, tone } = ctx;

  const loaderProps = processMediaValues(
    { size, variant, tone },
    {
      size: (val, { config }) => {
        const componentProps = config.button[val as keyof typeof config.button];

        if (!componentProps) {
          return {};
        }

        return {
          size: componentProps.icon.size,
        };
      },
      variant: (val, { props }) => {
        if (val === 'primary') {
          return {
            mainColor: `$border.${props.tone}-primary` as ColorTokens,
            spinColor: `$content.on-${props.tone}` as ColorTokens,
          };
        }

        return {
          mainColor: `$border.${props.tone}-secondary` as ColorTokens,
          spinColor: `$content.${props.tone}-primary` as ColorTokens,
        };
      },
    },
  ) as LoaderProps;

  return <Loader {...loaderProps} />;
}

export const Button = withStaticProperties(ButtonComponent, {
  Text: ButtonText,
  Icon: ButtonIcon,
});
