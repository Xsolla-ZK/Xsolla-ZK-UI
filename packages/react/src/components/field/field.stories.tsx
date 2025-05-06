import { AnimatePresence } from '@tamagui/animate-presence';
import { isWeb, Stack, Text } from '@tamagui/core';
import { Search } from '@xsolla-zk/icons';
import { RefObject, useEffect, useRef, useState } from 'react';
import { Button } from '../button/button';
import { Input, TextArea } from '../input';
import { RichIcon } from '../rich-icon/rich-icon';
import { Field } from './field';
import type { Meta, StoryObj } from '@storybook/react';
import type { GetProps } from '@tamagui/core';
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
      <Field.Control placeholder="Simple Input" />
    </Field>
  ),
};

export const FullAnatomy: Story = {
  args: {},
  render: (args) => (
    <Field error {...args}>
      <Field.Row>
        <Field.Label>Label</Field.Label>
        <Field.LabelValue>123</Field.LabelValue>
      </Field.Row>
      <Field.Control placeholder="Placeholder" />
      <Field.Row>
        <Field.Hint>Hint</Field.Hint>
        <Field.HintValue>10</Field.HintValue>
      </Field.Row>
      <Field.Row>
        <Field.Error>Error</Field.Error>
        <Field.ErrorValue>100</Field.ErrorValue>
      </Field.Row>
    </Field>
  ),
};

export const WithRichControl: Story = {
  args: {},
  render: (args) => (
    <Field {...args}>
      <Field.Row>
        <Field.Label>Label</Field.Label>
      </Field.Row>
      <Field.Control placeholder="Rich Input Control">
        <Input>
          <Input.EndSlot>
            <RichIcon size="$200">
              <RichIcon.Icon icon={Search} />
            </RichIcon>
          </Input.EndSlot>
        </Input>
      </Field.Control>
    </Field>
  ),
};

export const WithAnotherControl: Story = {
  args: {},
  render: (args) => (
    <Field {...args}>
      <Field.Row>
        <Field.Label>TextArea Control</Field.Label>
      </Field.Row>
      <Field.Control>
        <TextArea placeholder="TextArea Control" />
      </Field.Control>
    </Field>
  ),
};

export const WithError: Story = {
  args: {
    error: true,
  },
  render: (args) => (
    <Field {...args}>
      <Field.Row>
        <Field.Label>Name</Field.Label>
      </Field.Row>
      <Field.Control placeholder="Enter name" />
      <Field.Row>
        <Field.Error>Required field</Field.Error>
      </Field.Row>
    </Field>
  ),
};

export const WithHint: Story = {
  args: {},
  render: (args) => (
    <Field {...args}>
      <Field.Row>
        <Field.Label>Password</Field.Label>
      </Field.Row>
      <Field.Control type="password" placeholder="Enter password" />
      <Field.Row>
        <Field.Hint>Minimum 8 characters, including letters and numbers</Field.Hint>
      </Field.Row>
    </Field>
  ),
};

const WithCustomValidationExample = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | undefined>(undefined);

  const ref = useRef<HTMLElement>(null);

  const handleChange: GetProps<typeof Field.Control>['onChange'] = (e) => {
    const newValue = (e.target as HTMLInputElement).value;
    setValue(newValue);

    if (!newValue) {
      setError('Field is required');
    } else if (newValue.length < 3) {
      setError('Minimum 3 characters');
    } else {
      setError(undefined);
    }
  };

  return (
    <Field error={Boolean(error)}>
      <Field.Row>
        <Field.Label>Username</Field.Label>
        <Field.LabelValue>Required</Field.LabelValue>
      </Field.Row>
      <Field.Control>
        <Input value={value} onChange={handleChange} placeholder="Enter username" />
      </Field.Control>
      <Field.Row>
        <Field.Error>{error}</Field.Error>
      </Field.Row>
    </Field>
  );
};

export const WithCustomValidation: Story = {
  args: {},
  render: () => <WithCustomValidationExample />,
};

const WithErrorMaxLengthExample = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | undefined>(undefined);

  const handleChange: GetProps<typeof Field.Control>['onChange'] = (e) => {
    const newValue = (e.target as HTMLInputElement).value;
    setValue(newValue);

    if (newValue.length > 10) {
      setError('Maximum 10 characters');
    } else {
      setError(undefined);
    }
  };

  return (
    <Field error={Boolean(error)}>
      <Field.Row>
        <Field.Label>Max 10 characters</Field.Label>
      </Field.Row>
      <Field.Control value={value} onChange={handleChange} placeholder="Enter text" />
      <Field.Row>
        <Field.Error>{error}</Field.Error>
      </Field.Row>
    </Field>
  );
};

export const WithErrorInRow: Story = {
  args: {},
  render: () => <WithErrorMaxLengthExample />,
};

export const AllStates: Story = {
  args: {},
  render: (args) => (
    <Stack style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Field>
        <Field.Row>
          <Field.Label>Default Field</Field.Label>
        </Field.Row>
        <Field.Control placeholder="Enter text" />
        <Field.Row>
          <Field.Hint>Field hint</Field.Hint>
        </Field.Row>
      </Field>

      <Field error>
        <Field.Row>
          <Field.Label>Field with error</Field.Label>
        </Field.Row>
        <Field.Control placeholder="Enter text" />
        <Field.Row>
          <Field.Error>Validation error</Field.Error>
        </Field.Row>
      </Field>

      <Field id="custom-id">
        <Field.Row>
          <Field.Label>Field with custom ID</Field.Label>
          <Field.LabelValue>Required</Field.LabelValue>
        </Field.Row>
        <Field.Control placeholder="custom-id is attached to this field" />
        <Field.Row>
          <Field.Hint>Label and Control are connected via htmlFor/id</Field.Hint>
        </Field.Row>
      </Field>

      <Field>
        <Field.Row>
          <Field.Label>Default Input Field</Field.Label>
        </Field.Row>
        <Field.Control />
      </Field>
    </Stack>
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
