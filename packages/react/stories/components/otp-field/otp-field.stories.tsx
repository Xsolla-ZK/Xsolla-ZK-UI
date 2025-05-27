import { Stack } from '@tamagui/core';
import { useState } from 'react';
import { getComponentsConfig } from '../../utils';
import { Field } from '../field/field';
import { OTPField } from './otp-field';
import type { OTPFieldProps } from './otp-field.types';
import type { FieldSizes } from '../field/field.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().field) as FieldSizes[];

const meta = {
  component: OTPField,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['stable'],
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
      table: {
        defaultValue: { summary: '$500' },
        type: { summary: sizes.join('|') },
      },
    },
  },
  args: {},
  decorators: [
    (story) => (
      <Stack padding={40} maxWidth={400} marginHorizontal="auto">
        {story()}
      </Stack>
    ),
  ],
  play: async ({ canvasElement }) => {},
} as Meta<typeof OTPField>;

export default meta;
type Story = StoryObj<typeof meta>;

function OTPLayout({ size, error, ...props }: OTPFieldProps) {
  return (
    <Field size={size} error={error}>
      <Field.Row>
        <Field.Label>OTP Label</Field.Label>
      </Field.Row>
      <Field.Control>
        <OTPField {...props} />
      </Field.Control>
    </Field>
  );
}

export const Default: Story = {
  args: {},
};

export const OTPWithField: Story = {
  args: {},
  render: (args) => <OTPLayout {...args} />,
};

export const AllSizes: Story = {
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
  render: (args) => (
    <Stack gap={12}>
      {sizes.map((size) => (
        <Field key={size} size={size}>
          <Field.Row>
            <Field.Label>OTP Label {size}</Field.Label>
          </Field.Row>
          <Field.Control>
            <OTPField {...args} />
          </Field.Control>
        </Field>
      ))}
    </Stack>
  ),
};

export const OTPWithCustomLength: Story = {
  args: {
    length: 6,
  },
  render: (args) => <OTPLayout {...args} />,
};

export const OTPWithError: Story = {
  args: {
    error: true,
  },
  render: (args) => <OTPLayout {...args} />,
};

export const OTPWithDefaultValues: Story = {
  args: {},
  render: (args) => <OTPLayout defaultValue="1234" {...args} />,
};

function OTPControlledValue({ size, ...props }: OTPFieldProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState<{ msg: string; code: number } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (val: string) => {
    setValue(val);
    setError(null);
    setIsSuccess(false);

    if (!val?.includes(' ') && val.length === (props.length || 4)) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);

        if (val === '1234') {
          setIsSuccess(true);
        } else {
          setError({
            msg: 'Invalid code',
            code: 20,
          });
        }
      }, 2000);
    }
  };

  return (
    <Field size={size} error={Boolean(error)}>
      <Field.Row>
        <Field.Label>OTP Valid Code</Field.Label>
        <Field.LabelValue>1234</Field.LabelValue>
      </Field.Row>
      <Field.Control>
        <OTPField
          {...props}
          value={value}
          disabled={isLoading}
          onChange={handleChange}
          onPasteError={(errorCode) => {
            if (errorCode === 10) {
              setError({
                msg: 'The clipboard contains invalid characters',
                code: errorCode,
              });
            }
          }}
        />
      </Field.Control>
      <Field.Row>
        {isSuccess && <Field.Hint>Code verified successfully</Field.Hint>}
        {isLoading && <Field.Hint>Code is being verified...</Field.Hint>}
      </Field.Row>
      <Field.Row>
        <Field.Error>{error?.msg}</Field.Error>
        <Field.ErrorValue>{error?.code}</Field.ErrorValue>
      </Field.Row>
    </Field>
  );
}

export const OTPWithControlledValue: Story = {
  args: {},
  render: (args) => <OTPControlledValue {...args} />,
};

function OTPUncontrolledValue({ size, ...props }: OTPFieldProps) {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<{ msg: string; code: number } | null>(null);

  const handleChange = (val: string) => {
    if (val.length === (props.length || 4)) {
      setResult(val);
    }
  };

  return (
    <Field size={size} error={Boolean(error)}>
      <Field.Row>
        <Field.Label>Uncontrolled OTP Field</Field.Label>
        <Field.LabelValue>{result || 'Not submitted'}</Field.LabelValue>
      </Field.Row>
      <Field.Control>
        <OTPField
          {...props}
          defaultValue="5678"
          onChange={handleChange}
          onPasteError={(errorCode) => {
            if (errorCode === 10) {
              setError({
                msg: 'The clipboard contains invalid characters',
                code: errorCode,
              });
            }
          }}
        />
      </Field.Control>
      <Field.Row>
        <Field.Error>{error?.msg}</Field.Error>
        <Field.ErrorValue>{error?.code}</Field.ErrorValue>
      </Field.Row>
    </Field>
  );
}

export const OTPWithUncontrolledValue: Story = {
  args: {},
  render: (args) => <OTPUncontrolledValue {...args} />,
};

function OTPComparisonDemo({ size, ...props }: OTPFieldProps) {
  const [controlledValue, setControlledValue] = useState('1234');

  return (
    <Stack gap={12}>
      <Field size={size}>
        <Field.Row>
          <Field.Label>Controlled OTP (value="{controlledValue}")</Field.Label>
        </Field.Row>
        <Field.Control>
          <OTPField
            {...props}
            value={controlledValue}
            onChange={(val) => setControlledValue(val)}
          />
        </Field.Control>
        <Field.Row>
          <Field.Hint>
            In controlled mode, the component always displays the value passed to it, and onChange
            only informs the parent of the need to update the value
          </Field.Hint>
        </Field.Row>
      </Field>

      <Field size={size}>
        <Field.Row>
          <Field.Label>Uncontrolled OTP (defaultValue="5678")</Field.Label>
        </Field.Row>
        <Field.Control>
          <OTPField
            {...props}
            defaultValue="5678"
            onChange={(val) => console.log('Uncontrolled onChange:', val)}
          />
        </Field.Control>
        <Field.Row>
          <Field.Hint>
            In uncontrolled mode, the component itself manages its state, starting with
            defaultValue, and onChange only informs about changes
          </Field.Hint>
        </Field.Row>
      </Field>
    </Stack>
  );
}

export const OTPControlledVsUncontrolled: Story = {
  args: {},
  render: (args) => <OTPComparisonDemo {...args} />,
};

export const OTPWithPlaceholder: Story = {
  args: {},
  render: (args) => <OTPLayout placeholder="X" {...args} />,
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
