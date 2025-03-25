/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getConfig, View } from '@tamagui/core';
import Typography from './typography';
import type { Meta, StoryObj } from '@storybook/react';
import type { TypographyPresets } from '@xsolla-zk-ui/react/types/typography';

const allPresets = Object.entries(getConfig().fonts).reduce((acc, [fontKey, fontValue]) => {
  const sizes = Object.keys(fontValue.size);
  // @ts-ignore
  const variants = Object.keys(fontValue.weight);
  sizes.forEach((size) => {
    variants.forEach((variant) => {
      // @ts-ignore
      acc.push(`${fontKey}.${size}.${variant}`);
    });
  });
  return acc;
}, [] as TypographyPresets[]);

const meta = {
  component: Typography,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
    color: { control: 'color' },
    textAlign: { control: 'inline-radio', options: ['left', 'center', 'right'] },
    preset: {
      control: 'select',
      options: allPresets,
      table: { defaultValue: { summary: 'text.250.default' } },
    },
  },
  args: {
    children: 'Typography text',
    // onClick: fn(),
  },
  decorators: [
    (Story) => (
      <View p={40}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
