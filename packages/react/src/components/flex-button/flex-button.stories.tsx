import FlexButton from './flex-button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: FlexButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {},
  args: {
    children: <FlexButton.Text>Flex Button</FlexButton.Text>,
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof FlexButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
