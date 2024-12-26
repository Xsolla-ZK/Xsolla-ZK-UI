import XZKUISemanticText from './semantic-text';
import semanticTextTheme from './semantic-text.theme';
import type { Meta, StoryObj } from '@storybook/react';

const themeVariants = semanticTextTheme('dark').variants;

const meta = {
  component: XZKUISemanticText,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
    color: { control: 'color' },
    align: { control: 'inline-radio', options: ['left', 'center', 'right'] },
    variant: {
      control: 'inline-radio',
      options: Object.keys(themeVariants),
      table: {
        type: {
          summary: Object.keys(themeVariants).join('|'),
        },
      },
    },
  },
  args: {
    children: 'Title',
    // onClick: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 40 }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUISemanticText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const All: Story = {
  argTypes: {
    variant: {
      table: { disable: true },
    },
  },
  args: {},
  render: ({ variant, ...args }) => (
    <>
      {(Object.keys(themeVariants) as Array<keyof typeof themeVariants>).map((variant) => (
        <XZKUISemanticText key={variant} variant={variant} {...args} />
      ))}
    </>
  ),
};

export const AllWithValue: Story = {
  argTypes: {
    variant: {
      table: { disable: true },
    },
    value: {
      table: { disable: true },
    },
  },
  args: {
    value: 'Value',
  },
  render: ({ variant, ...args }) => (
    <>
      {(Object.keys(themeVariants) as Array<keyof typeof themeVariants>).map((variant) => (
        <XZKUISemanticText key={`${variant}-value`} variant={variant} {...args} />
      ))}
    </>
  ),
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
