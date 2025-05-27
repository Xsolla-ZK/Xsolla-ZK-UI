import { View } from '@tamagui/core';
import { Separator } from './separator';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    color: {
      control: 'color',
    },
    weight: { control: 'number' },
  },
  args: {},
  decorators: [
    (Story) => (
      <View alignItems="center" width={400} height={200}>
        <Story />
      </View>
    ),
  ],
  play: async ({ canvasElement }) => {},
} as Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomColor: Story = {
  args: {
    color: '#ff0000',
  },
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
};

export const CustomWeight: Story = {
  args: {
    weight: 4,
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
