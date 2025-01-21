import spacing from '@xsolla-zk-ui/react/tokens/common/spacing';
import typography from '@xsolla-zk-ui/react/tokens/common/typography';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';

const semanticTextTheme = (_mode: XZKUIThemeModeUnion) => ({
  variants: {
    headingXl: {
      marginTop: spacing[400],
      marginBottom: spacing[100],
      font: typography.display[500].accent,
    },
    headingLg: {
      marginTop: spacing[350],
      marginBottom: spacing[100],
      font: typography.display[450].accent,
    },
    headingMd: {
      marginTop: spacing[300],
      marginBottom: spacing[100],
      font: typography.display[400].accent,
    },
    headingSm: {
      marginTop: spacing[200],
      marginBottom: spacing[100],
      font: typography.display[350].accent,
    },
    headingXs: {
      marginTop: spacing[200],
      marginBottom: spacing[100],
      font: typography.compact[300].accent,
    },
    paragraphLg: {
      marginTop: spacing[100],
      marginBottom: spacing[100],
      font: typography.text[350].default,
    },
    paragraphMd: {
      marginTop: spacing[100],
      marginBottom: spacing[100],
      font: typography.text[300].default,
    },
    paragraphSm: {
      marginTop: spacing[100],
      marginBottom: spacing[100],
      font: typography.text[250].default,
    },
  },
});
export default semanticTextTheme;
