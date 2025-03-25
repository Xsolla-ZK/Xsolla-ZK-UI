import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import FlexButton from './flex-button';
import type { FlexButtonProps } from './flex-button.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().flexButton) as Array<FlexButtonProps['size']>;

const meta = {
  component: FlexButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
      table: {
        defaultValue: { summary: '$500' },
        type: { summary: sizes.join('|') },
      },
    },
  },
  // args: {
  //   // children: <FlexButton.Text>Flex Button</FlexButton.Text>,
  // },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof FlexButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <FlexButton {...args}>
      <FlexButton.Text>Flex Button</FlexButton.Text>
    </FlexButton>
  ),
};
