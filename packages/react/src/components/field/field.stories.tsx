import { Input } from '../input/input';
import { Field } from './field';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {},
  args: {},
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Field {...args}>
      <Field.Row>
        <Field.Label>Label</Field.Label>
      </Field.Row>
      <Field.Control asChild>
        <Input placeholder="Simple Input" />
      </Field.Control>
    </Field>
  ),
};

// export const TextFieldCustomRender: Story = {
//   args: {
//     label: 'Default input',
//     children: <Field.Control render="input" />,
//   },
// };

// export const TextFieldCallbackRender: Story = {
//   args: {
//     label: 'Label',
//     children: (
//       <Field.Control
//         render={(context) => <Input {...context} placeholder="With Context" />}
//       />
//     ),
//   },
// };

// export const TextareaField: Story = {
//   args: {
//     label: 'Textarea Label',
//     hint: 'fixed 5 rows',
//     children: <Field.Control render={Input} multiline rows={5} />,
//   },
// };

// export const AllState: Story = {
//   args: {
//     label: 'Label',
//     labelValue: 'Label value',
//     hint: 'Hint',
//     hintValue: 'Hint value',
//     error: 'Error',
//     errorValue: 'Error value',
//     children: <Field.Control render={Input} placeholder="Auto Provided Context" />,
//   },
// };

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
