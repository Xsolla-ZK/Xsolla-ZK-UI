import { Stack } from '@tamagui/core';
import { BankCard, Cross, DataTable } from '@xsolla-zk/icons';
import { getComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import { useCallback, useRef, useState } from 'react';
import { Loader } from '../loader/loader';
import { RichIcon } from '../rich-icon/rich-icon';
import { Input } from './input';
import type { InputProps, InputSizes } from './input.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().input) as InputSizes[];

const meta = {
  component: Input,
  parameters: {
    layout: 'centered',
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
  args: {
    placeholder: 'Placeholder',
  },
  play: async ({ canvasElement }) => {},
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <Input {...args} />,
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
        <Input key={size} {...args} size={size} />
      ))}
    </Stack>
  ),
};

export const Readonly: Story = {
  args: {
    readOnly: true,
    value: 'Some text',
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    error: true,
  },
};

export const WithStartSlot: Story = {
  args: {},
  render: (args) => (
    <Input {...args}>
      <Input.StartSlot>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={DataTable} />
        </RichIcon>
      </Input.StartSlot>
    </Input>
  ),
};

export const WithEndSlot: Story = {
  args: {},
  render: (args) => (
    <Input {...args}>
      <Input.EndSlot>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={BankCard} />
        </RichIcon>
      </Input.EndSlot>
    </Input>
  ),
};

export const WithAllSlots: Story = {
  args: {},
  render: (args) => (
    <Input {...args}>
      <Input.StartSlot>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={DataTable} />
        </RichIcon>
      </Input.StartSlot>
      <Input.EndSlot>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={BankCard} />
        </RichIcon>
      </Input.EndSlot>
    </Input>
  ),
};

function useDebounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay],
  );
}

function WithRichSlotComponent(props: InputProps) {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isLoadingRef = useRef(false);

  const debouncedRequest = useDebounce(() => {
    if (!isLoadingRef.current) {
      isLoadingRef.current = true;
      setIsLoading(true);
      setTimeout(() => {
        isLoadingRef.current = false;
        setIsLoading(false);
      }, 2000);
    }
  }, 300);

  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => {
        setValue((e.target as HTMLInputElement).value);
        debouncedRequest();
      }}
    >
      <Input.EndSlot>
        {({ focused }) => (
          <>
            {focused && isLoading && <Loader />}
            {value && (
              <RichIcon shape="squircle" size="$200" pressable onPress={() => setValue('')}>
                <RichIcon.Icon icon={Cross} />
              </RichIcon>
            )}
          </>
        )}
      </Input.EndSlot>
    </Input>
  );
}

export const WithRichSlot: Story = {
  args: {},
  render: (args) => <WithRichSlotComponent {...args} />,
};

export const Textarea: Story = {
  args: {
    tag: 'textarea',
  },
};
