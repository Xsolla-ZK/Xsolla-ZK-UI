'use client';

import { Moon, Sun } from '@xsolla-zk/icons';
import { Button, RichIcon, Theme, Typography, View } from '@xsolla-zk/react';
import React, { useEffect, useState } from 'react';
import { highlight } from '../utils/shared';
import type { BundledLanguage } from 'shiki/bundle/web';

interface CodePreviewProps {
  code: React.ComponentType;
  sourceCode?: string;
  title?: string;
  lang?: BundledLanguage;
}

export const CodePreview: React.FC<CodePreviewProps> = ({
  code: CodeComponent,
  sourceCode,
  lang = 'ts',
  title = 'Example',
}) => {
  const [showCode, setShowCode] = useState(false);
  const [extractedCode, setExtractedCode] = useState<string>('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (sourceCode) {
      void highlight(sourceCode, lang).then((code) => {
        setExtractedCode(code as unknown as string);
      });
    }
  }, [sourceCode]);

  return (
    <Theme name={theme}>
      <View
        marginVertical="$space.400"
        backgroundColor="$background.neutral-low"
        borderRadius="$space.400"
      >
        {/* Header */}
        <View
          paddingVertical="$space.300"
          paddingHorizontal="$space.400"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize="$space.400" fontWeight="600" color="$content.neutral-primary">
            {title}
          </Typography>
          <RichIcon
            size="$300"
            onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            pressable
          >
            <RichIcon.Icon>{theme === 'light' ? <Moon /> : <Sun />}</RichIcon.Icon>
          </RichIcon>
        </View>

        {/* Preview */}
        <View
          padding="$space.600"
          minHeight={120}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CodeComponent />
        </View>

        {/* Control panel */}
        <View
          paddingVertical="$space.200"
          paddingHorizontal="$space.400"
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          {sourceCode && (
            <Button
              size="$300"
              tone="neutral"
              variant="secondary"
              onPress={() => setShowCode(!showCode)}
            >
              <Button.Text>{showCode ? 'Hide code' : 'Show code'}</Button.Text>
            </Button>
          )}
        </View>

        {/* Code block */}
        {showCode && sourceCode && (
          <View
            backgroundColor="$background.static-dark-high"
            borderColor="$border.neutral-primary"
            overflow="hidden"
          >
            {extractedCode}
          </View>
        )}
      </View>
    </Theme>
  );
};
