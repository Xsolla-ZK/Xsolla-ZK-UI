import { css } from '@emotion/react';
import spacing from '@xsolla-zk-ui/react/tokens/common/spacing';
import typography from '@xsolla-zk-ui/react/tokens/common/typography';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';

const semanticTextTheme = (_mode: XZKUIThemeModeUnion) => ({
  variants: {
    headingXl: css({
      marginTop: spacing[400],
      marginBottom: spacing[100],
      font: typography.display[500].accent,
    }),
    headingLg: css({
      marginTop: spacing[350],
      marginBottom: spacing[100],
      font: typography.display[450].accent,
    }),
    headingMd: css({
      marginTop: spacing[300],
      marginBottom: spacing[100],
      font: typography.display[400].accent,
    }),
    headingSm: css({
      marginTop: spacing[200],
      marginBottom: spacing[100],
      font: typography.display[350].accent,
    }),
    headingXs: css({
      marginTop: spacing[200],
      marginBottom: spacing[100],
      font: typography.compact[300].accent,
    }),
    paragraphLg: css({
      marginTop: spacing[100],
      marginBottom: spacing[100],
      font: typography.text[350].default,
    }),
    paragraphMd: css({
      marginTop: spacing[100],
      marginBottom: spacing[100],
      font: typography.text[300].default,
    }),
    paragraphSm: css({
      marginTop: spacing[100],
      marginBottom: spacing[100],
      font: typography.text[250].default,
    }),
  },
});
export default semanticTextTheme;
