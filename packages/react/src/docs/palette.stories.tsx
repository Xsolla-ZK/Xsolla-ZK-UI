import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import setAlpha from '../utils/color/set-alpha';
import type { PickByDotNotation } from '../types/helpers';
import type { XZKUITheme } from '../types/theme';
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

const StyledColorMain = styled('div')(
  ({ theme }) => `
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    color: ${theme.theme.content['neutral-primary']};
  `,
);

const StyledColorInfo = styled('div')`
  flex: 0 0 30%;
  line-height: 20px;
  margin-top: 5px;
`;

const StyledColorTitle = styled('div')`
  margin-bottom: 6px;
  font-weight: 700;
`;

const StyledColorSubtitle = styled('div')`
  opacity: 0.6;
`;

const StyledColorsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  margin-bottom: 30px;
`;

const StyledColorsLine = styled('div')`
  border-radius: 4px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
  border: 1px solid hsla(203, 50%, 30%, 0.15);
  display: flex;
  flex-direction: row;
  height: 50px;
  margin-bottom: 5px;
  overflow: hidden;
  background-color: white;
  background-image: repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px);
  background-clip: padding-box;
`;

const StyledColorsItem = styled('div')`
  position: relative;
  flex: 1;
  height: 100%;
`;

const StyledColorsLabelLine = styled('div')(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    color: ${setAlpha(theme.theme.content['neutral-primary'], 0.6)};
  `,
);

const StyledColorsLabelText = styled('div')(
  () => `
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
    text-align: center;
    font-size: 12px;
    line-height: 1;
    overflow: hidden;
    > div {
      display: inline-block;
      overflow: hidden;
      max-width: 100%;
      text-overflow: ellipsis;
    }
  `,
);

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
              title={color}
              style={{ backgroundColor: color, width: '50px', height: '50px' }}
            />
          ))}
        </StyledColorsLine>
        <StyledColorsLabelLine>
          {Object.entries(colors).map(([name, color]) => (
            <StyledColorsLabelText key={color}>
              <div title={name}>{name}</div>
              <div title={color}>{color}</div>
            </StyledColorsLabelText>
          ))}
        </StyledColorsLabelLine>
      </StyledColorsWrapper>
    </StyledColorMain>
  );
}

function PaletteComponent() {
  const theme = useTheme();

  if (!theme?.palette) {
    return <div>Theme is not defined</div>;
  }

  return (
    <ColorPalette>
      {(Object.keys(theme.palette) as Array<keyof PickByDotNotation<XZKUITheme, 'palette'>>).map(
        (key) => {
          const colors = Object.entries(theme.palette[key]).reduce(
            (acc: Record<string, string>, [pick, value]) => {
              acc[pick] = value;
              return acc;
            },
            {},
          );
          return (
            <ColorItem key={key} title={`theme.palette.${key}`} subtitle={key} colors={colors} />
          );
        },
      )}
    </ColorPalette>
  );
}

export const Palette: Story = {
  render: () => <PaletteComponent />,
};
