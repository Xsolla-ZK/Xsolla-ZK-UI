---
to: packages/react/src/components/<%= h.changeCase.kebab(name) %>/<%= h.changeCase.kebab(name) %>.stories.tsx
---
import { within, expect } from '@storybook/test';
import <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.kebab(name) %>';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: <%= h.changeCase.pascal(name) %>,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: 'Text',
    // onClick: fn(),
  },
} satisfies Meta<typeof <%= h.changeCase.pascal(name) %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  // 👇 Test
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Assert DOM structure
    await expect(
      canvas.getByText('Text')
    ).toBeInTheDocument();
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
