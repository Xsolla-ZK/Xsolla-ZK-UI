import { Stack } from '@tamagui/core';
import {
  SEGMENTED_CONTROL_COMPONENT_NAME,
  SEGMENTED_CONTROL_SEGMENT_COMPONENT_NAME,
} from '@xsolla-zk/constants';
import { useMemo } from 'react';
import {
  createIconComponent,
  createStyledMediaContext,
  getComponentsConfig,
  getMappedStyles,
  processMediaValues,
  smartContextStyled,
} from '../../utils';
import { Typography } from '../typography';
import type {
  SegmentedControlContextValue,
  SegmentedControlSegmentPlacement,
  SegmentedControlSizes,
} from './segmented-control.types';
import type { XORIconProps } from '../../types';
import type { GetProps, VariantSpreadExtras } from '@tamagui/core';
import type { IconProps } from '@xsolla-zk/ui-primitives';

export const SegmentedControlContext = createStyledMediaContext(
  {
    baseId: '',
    value: '',
    onChange: () => {},
    orientation: 'horizontal',
    dir: 'ltr',
    activationMode: 'manual',
    size: '$500',
    registerSegment: () => {},
    unregisterSegment: () => {},
    segments: {},
    containerRef: null,
  } as SegmentedControlContextValue,
  ['size'],
);

export const SegmentedControlFrame = smartContextStyled(Stack, {
  name: SEGMENTED_CONTROL_COMPONENT_NAME,
  display: 'flex',
  flexDirection: 'row',

  borderColor: '$borderColor',

  variants: {
    backgrounded: {
      true: {
        backgroundColor: '$background',
      },
    },
    orientation: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
    size: (val: SegmentedControlSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.segmentedControl[val as keyof typeof config.segmentedControl];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.frame);
    },
  } as const,
  defaultVariants: {
    size: '$500',
    backgrounded: false,
  },
});

export const SegmentedControlSegmentFrame = smartContextStyled(Stack, {
  name: SEGMENTED_CONTROL_SEGMENT_COMPONENT_NAME,
  tag: 'button',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  cursor: 'pointer',
  backgroundColor: '$background',
  borderColor: '$borderColor',
  // animation: 'colorChange',

  // focusStyle: {
  //   outlineWidth: 2,
  //   outlineColor: '$background',
  //   outlineStyle: 'solid',
  // },
  variants: {
    placement: {
      left: {},
      right: {},
    },
    active: {
      true: {},
      false: {},
    },
    size: (val: SegmentedControlSizes, extras) => {
      const { props } = extras as VariantSpreadExtras<
        GetProps<typeof Stack> & { placement?: SegmentedControlSegmentPlacement; active?: boolean }
      >;
      const componentsConfig = getComponentsConfig();
      const componentProps = componentsConfig.segment[val as keyof typeof componentsConfig.segment];
      if (!componentProps) {
        return {};
      }

      const { borderRadius, ...restStyles } = getMappedStyles(componentProps.frame);

      if (props.placement === 'left') {
        return {
          ...restStyles,
          borderTopLeftRadius: borderRadius,
          borderBottomLeftRadius: borderRadius,
        };
      }
      if (props.placement === 'right') {
        return {
          ...restStyles,
          borderTopRightRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
        };
      }
      return restStyles;
    },
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  } as const,
});

// export const SegmentedControlSegmentOverlayFrame = styled(Stack, {
//   name: SEGMENTED_CONTROL_SEGMENT_COMPONENT_NAME,
//   tag: 'span',
//   position: 'absolute',
//   top: 0,
//   bottom: 0,
//   left: 0,
//   right: 0,
//   pointerEvents: 'none',
//   opacity: 0,
//   zIndex: 2,
//   borderRadius: 'inherit',
//   mixBlendMode: 'overlay',
//   backgroundColor: '$background.neutral-high',

//   hoverStyle: {
//     opacity: 1,
//   },
//   pressStyle: {
//     opacity: 0.5,
//   },
// });

export const SegmentedControlSegmentText = smartContextStyled(Typography, {
  name: SEGMENTED_CONTROL_SEGMENT_COMPONENT_NAME,
  color: '$color',
  userSelect: 'none',
  context: SegmentedControlContext,
  // animation: 'colorChange',

  variants: {
    size: (val: SegmentedControlSizes) => {
      const componentsConfig = getComponentsConfig();
      const componentProps = componentsConfig.segment[val as keyof typeof componentsConfig.segment];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.label);
    },
  } as const,
});

export const SegmentedControlSegmentIcon = (props: XORIconProps) => {
  const ctx = SegmentedControlContext.useStyledContext();

  const iconProps = useMemo(
    () =>
      processMediaValues(
        { size: ctx.size },
        {
          size: (val, { config }) => {
            const componentProps = config.segment[val as keyof typeof config.segment];

            if (!componentProps) {
              return {};
            }

            return {
              size: componentProps.icon.size,
            };
          },
        },
      ) as IconProps,
    [ctx.size],
  );

  return createIconComponent({ ...iconProps, color: '$color', ...props });
};
