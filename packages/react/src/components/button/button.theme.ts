import { themes } from '@xsolla-zk-ui/config';
import radius from '@xsolla-zk-ui/react/tokens/common/radius';
import size from '@xsolla-zk-ui/react/tokens/common/size';
import spacing from '@xsolla-zk-ui/react/tokens/common/spacing';
import typography from '@xsolla-zk-ui/react/tokens/common/typography';

export const buttonThemeSizes = [200, 300, 400, 500, 600, 700] as const;

const base = {
  size: [size[200], size[300], size[400], size[500], size[600], size[700]],
  font: [
    typography.compact[200].accent,
    typography.compact[200].accent,
    typography.compact[250].accent,
    typography.compact[350].accent,
    typography.compact[350].accent,
    typography.compact[350].accent,
  ],
  px: [spacing[100], spacing[200], spacing[250], spacing[300], spacing[350], spacing[400]],
  borderRadius: [radius[300], radius[300], radius[400], radius[500], radius[500], radius[550]],
};

const name = 'Button';


// export const buttonTheme = Object.keys(themes).reduce((acc, curr) =>{
//   acc[`${curr}_Button`] = {
//     background: themes[curr]['background.brand-high'],
//     color: themes[curr]['content.static-dark-primary'],
//   };
//   acc[`${curr}_secondary_Button`] = {
//     background: themes[curr]['overlay.neutral'],
//     color: themes[curr]['content.neutral-primary'],
//   };
//   return acc;
// }, {})
  // dark_Button: {
  //   background: themes.dark['background.brand-high'],
  //   color: themes.light['content.static-dark-primary'],
  // },
  // dark_secondary_Button: {
  //   background: themes.dark['overlay.neutral'],
  //   color: themes.dark['content.neutral-primary'],
  // },
