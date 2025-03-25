import Board from './board';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Board,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Board>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Some text',
  },
};

// export const Closable: Story = {
//   args: {
//     children: 'Some text',
//     isClosable: true,
//   },
// };

export const CustomBg: Story = {
  args: {
    backgroundColor: '$background.positive-high',
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
