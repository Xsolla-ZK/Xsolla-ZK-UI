import { createComponentTheme } from '@xsolla-zk-ui/config';
import { LOADER_COMPONENT_NAME } from './loader.constants';

// const loaderTheme = (mode: XZKUIThemeModeUnion) => {
//   const selectedTheme = tokensThemes[mode];

//   return {
//     variants: {
//       default: {
//         color: selectedTheme.theme.border.neutralSecondary,
//         '.spin': {
//           stroke: selectedTheme.theme.border.brandPrimary,
//         },
//       },
//       onLight: {
//         color: selectedTheme.theme.background.staticDarkHigh,
//         '.spin': {
//           stroke: selectedTheme.theme.border.brandPrimary,
//         },
//       },
//       onDark: {
//         color: selectedTheme.theme.background.staticLightHigh,
//         '.spin': {
//           stroke: selectedTheme.theme.border.brandPrimary,
//         },
//       },
//       brand: {
//         color: selectedTheme.theme.background.staticLightHigh,
//         '.spin': {
//           stroke: selectedTheme.theme.background.staticDarkHigh,
//         },
//       },
//     },
//   };
// };

// export default loaderTheme;

export const loaderTheme = createComponentTheme(
  LOADER_COMPONENT_NAME,
  (tokens) => ({
    color: tokens['border.neutral-secondary'],
    spinColor: tokens['border.brand-primary'],
  }),
  {
    warning: (tokens) => ({
      spinColor: tokens['border.warning-primary'],
    }),
  },
);
