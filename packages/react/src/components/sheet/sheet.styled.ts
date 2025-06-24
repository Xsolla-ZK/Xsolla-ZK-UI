import { Stack, styled } from '@tamagui/core';
import {
  SHEET_COMPONENT_NAME,
  SHEET_BODY_COMPONENT_NAME,
  SHEET_COVER_COMPONENT_NAME,
  SHEET_FOOTER_COMPONENT_NAME,
  SHEET_HANDLE_COMPONENT_NAME,
  SHEET_HEADER_COMPONENT_NAME,
  SHEET_OVERLAY_COMPONENT_NAME,
} from '@xsolla-zk/constants';
import { getComponentsConfig, getMappedStyles } from '../../utils';
import type { SheetPresets, SheetSizes } from './sheet.types';
import type { GetProps, VariantSpreadExtras } from '@tamagui/core';

export const SheetFrame = styled(Stack, {
  name: SHEET_COMPONENT_NAME,
  flex: 1,
  backgroundColor: '$background',
  maxHeight: '100%',
  overflow: 'hidden',

  variants: {
    preset: {
      'bottom-sheet': {},
      fullscreen: {},
      popup: {},
    },
    size: (val: SheetSizes, extras) => {
      const { props } = extras as VariantSpreadExtras<
        GetProps<typeof Stack> & { preset?: SheetPresets }
      >;
      if (extras.props.componentName === SHEET_COVER_COMPONENT_NAME) {
        return {
          backgroundColor: 'transparent',
        };
      }
      const config = getComponentsConfig();
      const componentProps = config.modal[val as keyof typeof config.modal];

      if (!componentProps) {
        return {};
      }

      if (props.preset === 'bottom-sheet') {
        const br = componentProps.frame.borderRadius;
        const styles = getMappedStyles({ borderTopLeftRadius: br, borderTopRightRadius: br });
        return {
          margin: 0,
          ...styles,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        };
      }

      if (props.preset === 'fullscreen') {
        return {
          margin: 0,
          borderRadius: 0,
        };
      }

      return getMappedStyles(componentProps.frame);
    },
  } as const,

  defaultVariants: {
    size: '$500',
    preset: 'bottom-sheet',
  },
});

export const SheetHandle = styled(Stack, {
  name: SHEET_HANDLE_COMPONENT_NAME,

  // height: 10,
  // borderRadius: 100,
  // backgroundColor: '$background',
  // zIndex: 10,
  // marginHorizontal: '35%',
  // marginBottom: 10,
  // opacity: 0.5,

  // hoverStyle: {
  //   opacity: 0.7,
  // },

  variants: {
    open: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
      },
      false: {
        opacity: 0,
        pointerEvents: 'none',
      },
    },
  } as const,

  defaultVariants: {},
});

export const SheetHeader = styled(Stack, {
  name: SHEET_HEADER_COMPONENT_NAME,

  variants: {
    blured: {
      true: {
        backgroundColor: '$layer.floor-overlay',
        backdropFilter: 'blur(200px)',
      },
      false: {},
    },
    size: (val: SheetSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.modal[val as keyof typeof config.modal];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.header);
    },
  } as const,

  defaultVariants: {
    size: '$500',
  },
});

export const SheetBody = styled(Stack, {
  name: SHEET_BODY_COMPONENT_NAME,

  variants: {
    size: (val: SheetSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.modal[val as keyof typeof config.modal];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.content);
    },
  } as const,

  defaultVariants: {
    size: '$500',
  },
});

export const SheetFooter = styled(Stack, {
  name: SHEET_FOOTER_COMPONENT_NAME,

  variants: {
    blured: {
      true: {
        backgroundColor: '$layer.floor-overlay',
        backdropFilter: 'blur(200px)',
      },
      false: {},
    },
    size: (val: SheetSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.modal[val as keyof typeof config.modal];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.footer);
    },
  } as const,

  defaultVariants: {
    size: '$500',
  },
});

export const SheetOverlay = styled(Stack, {
  name: SHEET_OVERLAY_COMPONENT_NAME,
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 100_000 - 1,
  pointerEvents: 'auto',
  backgroundColor: '$background',

  variants: {
    open: {
      true: {
        pointerEvents: 'auto',
      },
      false: {
        pointerEvents: 'none',
      },
    },
  } as const,

  defaultVariants: {},
});
