import { createStyledContext, Stack } from '@tamagui/core';
import { styled } from '@tamagui/core';
import { createIconComponent, getComponentsConfig, getMappedStyles } from '../../utils';
import { Typography } from '../typography';
import {
  SEGMENTED_CONTROL_COMPONENT_NAME,
  SEGMENTED_CONTROL_SEGMENT_COMPONENT_NAME,
} from './segmented-control.constants';
import type {
  SegmentedControlContextValue,
  SegmentedControlSegmentPlacement,
  SegmentedControlSizes,
} from './segmented-control.types';
import type { GetProps, VariantSpreadExtras } from '@tamagui/core';

export const SegmentedControlContext = createStyledContext<SegmentedControlContextValue>({
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
});

export const SegmentedControlFrame = styled(Stack, {
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

export const SegmentedControlSegmentFrame = styled(Stack, {
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
  animation: 'colorChange',

  pressStyle: {
    backgroundColor: '$backgroundHover',
  },
  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },
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
      const config = getComponentsConfig();
      const componentProps = config.segment[val as keyof typeof config.segment];
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

export const SegmentedControlSegmentText = styled(Typography, {
  name: SEGMENTED_CONTROL_SEGMENT_COMPONENT_NAME,
  color: '$color',
  fontSize: '$500',
  userSelect: 'none',
  animation: 'colorChange',

  variants: {
    size: (val: SegmentedControlSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.segment[val as keyof typeof config.segment];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.label);
    },
  } as const,
});

export const SegmentedControlSegmentIcon = createIconComponent(
  SEGMENTED_CONTROL_SEGMENT_COMPONENT_NAME,
  SegmentedControlContext,
  'segment',
);
