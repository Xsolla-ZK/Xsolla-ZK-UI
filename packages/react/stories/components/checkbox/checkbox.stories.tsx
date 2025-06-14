/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Stack } from '@tamagui/core';
import { Text } from '@tamagui/core';
import { Checkmark, Star } from '@xsolla-zk/icons';
import { useId, useState } from 'react';
import { getComponentsConfig } from '../../utils';
import { Button } from '../button/button';
import { Label } from '../label/label';
import { Checkbox } from './checkbox';
import type { CheckboxProps, CheckboxSizes } from './checkbox.types';
import type { Meta, StoryObj } from '@storybook/react';
import type { FormEvent } from 'react';

const sizes = Object.keys(getComponentsConfig().checkbox) as CheckboxSizes[];

const meta = {
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
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
    children: (
      <Checkbox.Indicator>
        <Checkmark />
      </Checkbox.Indicator>
    ),
  },
  play: async ({ canvasElement }) => {},
} as Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Native: Story = {
  args: {
    native: 'web',
  },
};

export const CustomCheckIcon: Story = {
  args: {
    defaultChecked: true,
    children: <Checkbox.Indicator icon={Star} />,
  },
};

export const CustomCheckedColor: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <Checkbox {...args}>
      <Checkbox.Indicator color="#d600ff">
        <Checkmark />
      </Checkbox.Indicator>
    </Checkbox>
  ),
};

export const CustomCheckedColorThemeBased: Story = {
  parameters: {
    docs: {
      source: {
        code: `
          <Checkbox defaultChecked>
            <Checkbox.Indicator color="$content.static-light-primary">
              <Checkmark />
            </Checkbox.Indicator>
          </Checkbox>
        `,
        language: 'tsx',
        format: true,
        type: 'auto',
      },
    },
  },
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <Checkbox {...args}>
      <Checkbox.Indicator color="$content.static-light-primary">
        <Checkmark />
      </Checkbox.Indicator>
    </Checkbox>
  ),
};

function CheckboxWithLabel({
  size,
  label = 'Accept terms and conditions',
  ...checkboxProps
}: CheckboxProps & { label?: string }) {
  const uniqueId = useId();
  const id = `${uniqueId}checkbox-${(size || '').toString().slice(1)}`;

  return (
    <Stack flexDirection="row" alignItems="center" gap="$space.250">
      <Checkbox id={id} size={size} {...checkboxProps}>
        <Checkbox.Indicator>
          <Checkmark />
        </Checkbox.Indicator>
      </Checkbox>

      <Label htmlFor={id}>{label}</Label>
    </Stack>
  );
}

export const WithLabel: Story = {
  args: {},
  render: (args) => (
    <Stack gap="$space.250">
      <CheckboxWithLabel {...args} />
      <CheckboxWithLabel {...args} />
    </Stack>
  ),
};

export const AllSizes: Story = {
  args: {},
  render: (args) => (
    <Stack flexDirection="row" alignItems="center" gap="$space.250">
      {sizes.map((size) => (
        <Checkbox key={size} {...args} size={size}>
          <Checkbox.Indicator>
            <Checkmark />
          </Checkbox.Indicator>
        </Checkbox>
      ))}
    </Stack>
  ),
};

function CheckboxWithForm() {
  const [animals, setAnimals] = useState<string[]>([]);

  return (
    <Stack gap="$space.250">
      <Stack
        gap="$space.250"
        tag="form"
        // @ts-ignore
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          alert(animals.join(', '));
        }}
      >
        <Stack flexDirection="row" alignItems="center" gap="$space.250">
          <CheckboxWithLabel
            label="Dog"
            name="animals"
            checked={animals.includes('dog')}
            value="dog"
            onCheckedChange={(checked) => {
              setAnimals(
                checked ? [...animals, 'dog'] : animals.filter((animal) => animal !== 'dog'),
              );
            }}
          />
          <CheckboxWithLabel
            label="Cat"
            name="animals"
            value="cat"
            checked={animals.includes('cat')}
            onCheckedChange={(checked) => {
              setAnimals(
                checked ? [...animals, 'cat'] : animals.filter((animal) => animal !== 'cat'),
              );
            }}
          />
          <CheckboxWithLabel
            label="Bird"
            name="animals"
            value="bird"
            checked={animals.includes('bird')}
            onCheckedChange={(checked) => {
              setAnimals(
                checked ? [...animals, 'bird'] : animals.filter((animal) => animal !== 'bird'),
              );
            }}
          />
        </Stack>
        <Stack flexDirection="row" alignItems="center" gap="$space.250">
          <Button>
            <Button.Text>Submit</Button.Text>
          </Button>
          <Button type="button" tone="neutral" variant="secondary" onPress={() => setAnimals([])}>
            <Button.Text>Reset</Button.Text>
          </Button>
        </Stack>
      </Stack>
      {animals.length > 0 && (
        <Stack>
          {animals.map((value) => (
            <Text key={`animals-${value}`}>animals: {value}</Text>
          ))}
        </Stack>
      )}
    </Stack>
  );
}

export const WithForm: Story = {
  args: {},
  render: () => <CheckboxWithForm />,
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
