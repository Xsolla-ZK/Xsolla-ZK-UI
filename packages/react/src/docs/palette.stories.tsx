import { styled, Text, useTheme, View } from '@tamagui/core';
import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

const meta: Meta = {
  title: 'Docs/Colors',
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

function ColorPalette({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

const StyledColorMain = styled(View, {
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
  padding: 20,
  boxSizing: 'border-box',
});

const StyledColorInfo = styled(View, {
  flex: 0,
  flexBasis: '30%',
  marginTop: 5,
});

const StyledColorTitle = styled(Text, {
  marginBottom: 6,
  fontWeight: 700,
  lineHeight: 20,
  color: '$content.neutral-primary',
});

const StyledColorSubtitle = styled(Text, {
  opacity: 0.6,
  color: '$content.neutral-primary',
});

const StyledColorsWrapper = styled(View, {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: 'relative',
  marginBottom: 30,
});

const StyledColorsLine = styled(View, {
  borderRadius: 4,
  background: '#ffffff',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0 1px 3px 0',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'hsla(203, 50%, 30%, 0.15)',
  display: 'flex',
  flexDirection: 'row',
  height: 50,
  marginBottom: 5,
  overflow: 'hidden',
  backgroundColor: 'white',
  backgroundImage: 'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
  backgroundClip: 'padding-box',
});

const StyledColorsItem = styled(View, {
  position: 'relative',
  flex: 1,
  height: '100%',
});

const StyledColorsLabelLine = styled(View, {
  display: 'flex',
  flexDirection: 'row',
});

const StyledColorsLabelTextWrapper = styled(View, {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  flex: 1,
  overflow: 'hidden',
});

const StyledColorsLabelText = styled(Text, {
  overflow: 'hidden',
  maxWidth: '100%',
  textOverflow: 'ellipsis',
  textAlign: 'center',
  fontSize: 12,
  lineHeight: 1,
  color: '$content.neutral-primary',
});

function ColorItem({
  title,
  subtitle,
  colors,
}: {
  title: string;
  subtitle: string;
  colors: Record<string, string>;
}) {
  return (
    <StyledColorMain>
      <StyledColorInfo>
        <StyledColorTitle>{title}</StyledColorTitle>
        <StyledColorSubtitle>{subtitle}</StyledColorSubtitle>
      </StyledColorInfo>
      <StyledColorsWrapper>
        <StyledColorsLine>
          {Object.entries(colors).map(([name, color]) => (
            <StyledColorsItem
              key={name}
              style={{ backgroundColor: color, width: '50px', height: '50px' }}
            />
          ))}
        </StyledColorsLine>
        <StyledColorsLabelLine>
          {Object.entries(colors).map(([name, color]) => (
            <StyledColorsLabelTextWrapper key={color}>
              <StyledColorsLabelText>{name}</StyledColorsLabelText>
              <StyledColorsLabelText>{color}</StyledColorsLabelText>
            </StyledColorsLabelTextWrapper>
          ))}
        </StyledColorsLabelLine>
      </StyledColorsWrapper>
    </StyledColorMain>
  );
}

function PaletteComponent() {
  const theme = useTheme();
  if (!theme) {
    return <div>Theme is not defined</div>;
  }

  const themeByCategory = Object.keys(theme).reduce((acc, curr) => {
    const splitKey = curr.split('.');
    acc.push(splitKey);
    return acc;
  }, [] as string[][]);

  return (
    <ColorPalette>
      {themeByCategory.map((key) => {
        const colors = Object.entries(theme[key.join('.') as keyof typeof theme]).reduce(
          (acc: Record<string, string>, [pick, value]) => {
            acc[pick] = value;
            return acc;
          },
          {},
        );
        return <ColorItem key={key} title={`theme.${key}`} subtitle={key} colors={colors} />;
      })}
    </ColorPalette>
  );
}

export const Palette: Story = {
  render: () => <PaletteComponent />,
};
