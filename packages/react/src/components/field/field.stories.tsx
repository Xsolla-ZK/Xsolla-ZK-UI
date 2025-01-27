import XZKUIInput from '../input/input';
import XZKUIField from './field';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUIField,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    // children: { control: 'text' },
  },
  args: {
    children: 'Text',
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUIField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    children: <XZKUIField.Control placeholder="Simple Input" />,
  },
};

export const TextFieldCustomRender: Story = {
  args: {
    label: 'Default input',
    children: <XZKUIField.Control render="input" />,
  },
};

export const TextFieldCallbackRender: Story = {
  args: {
    label: 'Label',
    children: (
      <XZKUIField.Control
        render={(context) => <XZKUIInput {...context} placeholder="With Context" />}
      />
    ),
  },
};

export const TextareaField: Story = {
  args: {
    label: 'Textarea Label',
    hint: 'fixed 5 rows',
    children: <XZKUIField.Control render={XZKUIInput} multiline rows={5} />,
  },
};

export const AllState: Story = {
  args: {
    label: 'Label',
    labelValue: 'Label value',
    hint: 'Hint',
    hintValue: 'Hint value',
    error: 'Error',
    errorValue: 'Error value',
    children: <XZKUIField.Control render={XZKUIInput} placeholder="Auto Provided Context" />,
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
