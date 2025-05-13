import { createStyledContext, Stack, styled, View } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import { getMappedStyles } from '@xsolla-zk/react/utils/get-mapped-styles';
import {
  SLIDER_TRACK_ACTIVE_NAME,
  SLIDER_KNOB_NAME,
  SLIDER_TRACK_NAME,
  SLIDER_COMPONENT_NAME,
} from './slider.constants';
import type { SliderContextType, SliderSizes } from './slider.types';
import type { GetProps, VariantSpreadExtras } from '@tamagui/core';

export const SliderContext = createStyledContext<SliderContextType>({
  size: '$500',
  min: 0,
  max: 100,
  values: [],
  valueIndexToChangeRef: { current: 0 },
  thumbs: new Map(),
  orientation: 'horizontal',
});

export const {
  Provider: SliderOrientationProvider,
  useStyledContext: useSliderOrientationContext,
} = createStyledContext<{
  startEdge: 'bottom' | 'left' | 'right';
  endEdge: 'top' | 'right' | 'left';
  sizeProp: 'width' | 'height';
  size: number | SliderSizes;
  direction: number;
}>({
  startEdge: 'left',
  endEdge: 'right',
  sizeProp: 'width',
  size: 0,
  direction: 1,
});

export const SliderFrame = styled(View, {
  name: SLIDER_COMPONENT_NAME,
  position: 'relative',

  variants: {
    orientation: {
      horizontal: {
        justifyContent: 'center',
      },
      vertical: {
        alignItems: 'center',
      },
    },
    error: {
      true: {},
      false: {},
    },
    size: (val: SliderSizes, extras) => {
      const {
        props: { orientation },
      } = extras as VariantSpreadExtras<GetProps<typeof View> & SliderContextType>;

      const config = getComponentsConfig();
      const componentProps = config.slider[val];
      if (!componentProps) {
        return {};
      }

      const { height } = getMappedStyles(componentProps.frame);

      if (orientation === 'horizontal') {
        return {
          height,
        };
      }

      return {
        width: height,
      };
    },
  } as const,
});

export const SliderTrackFrame = styled(SliderFrame, {
  name: SLIDER_TRACK_NAME,
  height: '100%',
  width: '100%',
  backgroundColor: '$background',
  position: 'relative',
  // borderRadius: 100_000,
  overflow: 'hidden',

  variants: {
    size: (val: SliderSizes, extras) => {
      const {
        props: { orientation },
      } = extras as VariantSpreadExtras<GetProps<typeof View> & SliderContextType>;

      const config = getComponentsConfig();
      const componentProps = config.slider[val];
      if (!componentProps) {
        return {};
      }

      const { height, ...styles } = getMappedStyles(componentProps.frame);

      if (orientation === 'horizontal') {
        return styles;
      }

      return styles;
    },
  } as const,

  defaultVariants: {},
});

export const SliderTrackActiveFrame = styled(SliderFrame, {
  name: SLIDER_TRACK_ACTIVE_NAME,
  backgroundColor: '$background',
  position: 'absolute',
  pointerEvents: 'box-none',
});

export const SliderKnobFrame = styled(Stack, {
  name: SLIDER_KNOB_NAME,

  position: 'absolute',
  backgroundColor: '$background',
  borderColor: '$borderColor',
  borderRadius: '$999',

  variants: {
    size: (val: SliderSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.slider[val];
      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.knob);
    },
  } as const,

  defaultVariants: {},
});
