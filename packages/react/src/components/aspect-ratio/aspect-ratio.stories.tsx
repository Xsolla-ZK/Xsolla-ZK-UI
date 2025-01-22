import XZKUIAspectRatio from './aspect-ratio';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUIAspectRatio,
  parameters: {
    layout: 'center',
  },
  tags: ['stable'],
  argTypes: {
    children: { control: 'text' },
    aspectRatio: {
      table: {
        defaultValue: {
          summary: '[16, 9]',
        },
        type: {
          summary: '[number, number]',
        },
      },
      control: 'object',
    },
  },
  args: {
    // onClick: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400, padding: 40, margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUIAspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div style={{ background: 'red', height: '100%' }} />,
  },
};

export const SquareAspect: Story = {
  args: {
    aspectRatio: [1, 1],
    children: <div style={{ background: 'wheat', height: '100%' }} />,
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
