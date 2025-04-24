import { Loader } from './loader';
import type { Meta, StoryObj } from '@storybook/react';

const tones = ['brand', 'on-light', 'on-dark', 'on-brand'] as const;

const meta = {
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    mainColor: { control: 'color', type: 'string' },
    spinColor: { control: 'color', type: 'string' },
    size: { control: 'number', type: 'number' },
    vertical: {
      control: 'boolean',
      type: 'boolean',
    },
    tone: {
      control: 'select',
      options: tones,
      table: {
        defaultValue: { summary: 'brand' },
        type: { summary: tones.join('|') },
      },
    },
  },
  args: {},
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const AllTones: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px' }}>
      {tones.map((tone) => (
        <Loader key={tone} tone={tone} {...args} />
      ))}
    </div>
  ),
};

export const WithChildren: Story = {
  args: {
    children: <Loader.Text>Loading</Loader.Text>,
  },
};

export const WithChildrenVertical: Story = {
  args: {
    children: <Loader.Text>Loading</Loader.Text>,
    vertical: true,
  },
};

export const CustomColorsProps: Story = {
  args: {
    mainColor: '#E8523B',
    spinColor: '#111014',
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
