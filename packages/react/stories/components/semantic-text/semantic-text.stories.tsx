import { expect, within } from '@storybook/test';
import { View } from '@tamagui/core';
import { getComponentsConfig } from '../../utils';
import { SemanticText } from './semantic-text';
import type { SemanticTextProps } from './semantic-text.types';
import type { Meta, StoryObj } from '@storybook/react';

const variants = Object.keys(getComponentsConfig().semanticText) as Array<
  SemanticTextProps['variant']
>;

const meta = {
  component: SemanticText,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
    color: { control: 'color' },
    textAlign: { control: 'inline-radio', options: ['left', 'center', 'right'] },
    variant: {
      control: 'inline-radio',
      options: variants,
      table: {
        defaultValue: {
          summary: 'paragraphM',
        },
        type: {
          summary: variants.join('|'),
        },
      },
    },
    tag: {
      control: 'inline-radio',
      options: ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'p'],
      table: {
        defaultValue: {
          summary: 'div',
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
      <View p={40}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof SemanticText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText('Title');
    await expect(title).toBeInTheDocument();
  },
};

export const CustomColor: Story = {
  args: {
    color: '#1cb084',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText('Title');
    await expect(title).toBeInTheDocument();
    await expect(title).toHaveStyle({ color: '#1cb084' });
  },
};

export const CustomColorThemeBased: Story = {
  args: {
    color: '$content.info-primary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText('Title');
    await expect(title).toBeInTheDocument();
  },
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
      {variants.map((variant) => (
        <SemanticText key={variant} variant={variant} {...args}>
          {variant}
        </SemanticText>
      ))}
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    for (const variant of variants) {
      const element = canvas.getByText(variant as string);
      await expect(element).toBeInTheDocument();
    }
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
