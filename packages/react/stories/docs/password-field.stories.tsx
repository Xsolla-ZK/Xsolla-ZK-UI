import { Stack } from '@tamagui/core';
import { Cross, Eye, EyeSlash } from '@xsolla-zk/icons';
import { forwardRef, useState } from 'react';
import { Field } from '../components/field/field';
import { Input } from '../components/input';
import { RichIcon } from '../components/rich-icon/rich-icon';
import type { InputProps } from '../components/input';
import type { Meta, StoryObj } from '@storybook/react';
import type { ChangeEvent } from 'react';

const PasswordField = forwardRef<HTMLInputElement, InputProps>(function PasswordField(
  { value, onChange, ...props },
  ref,
) {
  const [localValue, setValue] = useState(() => value ?? '');

  const [show, setShow] = useState(false);

  const handleChange: InputProps['onChange'] = (event) => {
    const target = event.target as HTMLInputElement;
    setValue(target.value);
    onChange?.(event as ChangeEvent<HTMLInputElement>);
  };

  const handleClear = () => {
    setValue('');

    const syntheticEvent = {
      target: { value: '' },
    } as ChangeEvent<HTMLInputElement>;

    onChange?.(syntheticEvent);
  };

  const handleClickShowPassword = () => {
    setShow((prev) => !prev);
  };

  return (
    <Input
      type={show ? 'text' : 'password'}
      value={localValue}
      onChange={handleChange}
      {...props}
      ref={ref}
    >
      <Input.EndSlot>
        <RichIcon
          pressable
          shape="squircle"
          size="$200"
          aria-label="toggle password visibility"
          onPress={handleClickShowPassword}
        >
          <RichIcon.Icon icon={show ? EyeSlash : Eye} />
        </RichIcon>
        {Boolean(localValue) && (
          <RichIcon pressable shape="squircle" size="$200" onPress={handleClear}>
            <RichIcon.Icon icon={Cross} />
          </RichIcon>
        )}
      </Input.EndSlot>
    </Input>
  );
});

const meta = {
  title: 'Widgets/Password Field',
  component: PasswordField,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {},
  args: {
    autoSave: 'off',
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithFieldStruct: Story = {
  args: {},
  render: (args) => (
    <Field>
      <Field.Row>
        <Field.Label>Password</Field.Label>
      </Field.Row>
      <Field.Control>
        <PasswordField {...args} />
      </Field.Control>
    </Field>
  ),
};

function PasswordWithConfirmationField() {
  const [password, setPassword] = useState('');
  const [isDirty, setIsDirty] = useState(false);
  const [isConfirmDirty, setIsConfirmDirty] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange: InputProps['onChange'] = (event) => {
    const target = event.target as HTMLInputElement;
    setPassword(target.value);
  };

  const handleConfirmPasswordChange: InputProps['onChange'] = (event) => {
    const target = event.target as HTMLInputElement;
    setConfirmPassword(target.value);
  };

  return (
    <Stack gap={12}>
      <Field error={isDirty && password.length > 0 && password.length < 8}>
        <Field.Row>
          <Field.Label>Password</Field.Label>
        </Field.Row>
        <Field.Control>
          <PasswordField
            onChange={handlePasswordChange}
            value={password}
            onFocus={() => setIsDirty(true)}
          />
        </Field.Control>
        <Field.Row>
          <Field.Error>At least 8 characters</Field.Error>
        </Field.Row>
      </Field>
      <Field error={isConfirmDirty && confirmPassword.length > 0 && password !== confirmPassword}>
        <Field.Row>
          <Field.Label>Confirm password</Field.Label>
        </Field.Row>
        <Field.Control>
          <PasswordField
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
            onFocus={() => setIsConfirmDirty(true)}
          />
        </Field.Control>
        <Field.Row>
          <Field.Error>Passwords do not match</Field.Error>
        </Field.Row>
      </Field>
    </Stack>
  );
}

export const WithConfirmationField: Story = {
  args: {},
  render: () => <PasswordWithConfirmationField />,
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
