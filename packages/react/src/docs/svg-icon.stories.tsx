import { expect, within } from '@storybook/test';
import { Stack } from '@tamagui/core';
import * as Svg from '@xsolla-zk-ui/icons';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

const meta = {
  component: Svg.Plus,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // color: { control: 'color' },
  },
  args: {},
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Svg.Plus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const All: Story = {
  render: (args) => (
    <Stack flexWrap="wrap" flexDirection="row" gap={16}>
      {Object.keys(Svg).map((name) => {
        const SvgComponent = (Svg as Record<string, ComponentType>)[name];
        return <SvgComponent key={name} data-testid={`icon-${name}`} {...args} />;
      })}
    </Stack>
  ),
  // 👇 Test
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    for (const name of Object.keys(Svg)) {
      const element = canvas.queryByTestId(`icon-${name}`);
      await expect(element).toBeInTheDocument();
    }
  },
};
