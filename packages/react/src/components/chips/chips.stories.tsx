import { Stack } from '@tamagui/core';
import { Text } from '@tamagui/core';
import { Plus } from '@xsolla-zk-ui/icons';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { useId, useState } from 'react';
import Button from '../button/button';
import { Chips } from './chips';
import type { ChipProps, ChipsContextType, ChipsMultiValue, ChipsProps } from './chips.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().chips) as Array<ChipProps['size']>;

const variants = ['primary', 'secondary', 'tertiary'] as const;
const tones = [
  'brand',
  'neutral',
  'positive',
  'warning',
  'info',
  'negative',
  'brand-extra',
] as const;

const meta = {
  component: Chips,
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
    variant: {
      control: 'select',
      options: variants,
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: variants.join('|') },
      },
    },
    tone: {
      control: 'select',
      options: tones,
      table: {
        defaultValue: { summary: 'brand' },
        type: { summary: tones.join('|') },
      },
    },
    children: { table: { disable: true } },
  },
  args: {},
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

function ChipsComposition({ id: idProp, ...props }: ChipsProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const id = idProp ?? useId();

  return (
    <Chips {...props}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Chips.Item key={id + index} value={id + index}>
          <Chips.Item.Icon icon={Plus} />
          <Chips.Item.Text>Chip {index}</Chips.Item.Text>
        </Chips.Item>
      ))}
    </Chips>
  );
}

export const Default: Story = {
  args: {},
  render: ChipsComposition,
};

export const WithCustomTone: Story = {
  args: {},
  render: (args) => (
    <Chips {...args}>
      {tones.map((tone) => (
        <Chips.Item key={tone} tone={tone} value={tone as string}>
          <Chips.Item.Icon icon={Plus} />
          <Chips.Item.Text>Chip {tone}</Chips.Item.Text>
        </Chips.Item>
      ))}
    </Chips>
  ),
};

export const AllSizes: Story = {
  args: {},
  render: (args) => (
    <Chips {...args}>
      {sizes.map((size) => (
        <Chips.Item key={size} size={size} value={size as string}>
          <Chips.Item.Icon icon={Plus} />
          <Chips.Item.Text>Chip {size}</Chips.Item.Text>
        </Chips.Item>
      ))}
    </Chips>
  ),
};

function MultiSelectWithControlledValue() {
  const defaultValue = ['chips-controlled-value0', 'chips-controlled-value1'];
  const [controllableValue, setValue] = useState<ChipsMultiValue>(defaultValue);
  return (
    <Stack gap="$200">
      <ChipsComposition
        id="chips-controlled-value"
        value={controllableValue}
        multiselect
        onValueChange={(val) => setValue(val)}
      />
      <Stack>
        <Button onPress={() => setValue(defaultValue)}>
          <Button.Text>Reset</Button.Text>
        </Button>
        <Text>Selected values:</Text>
        <Text>{JSON.stringify(controllableValue)}</Text>
      </Stack>
    </Stack>
  );
}

export const Multiselect: Story = {
  argTypes: {
    multiselect: { table: { disable: true } },
  },
  args: {
    multiselect: true,
  },
  render: ChipsComposition,
};

export const MultiselectWithControlledState: Story = {
  argTypes: {
    multiselect: { table: { disable: true } },
  },
  args: {},
  render: MultiSelectWithControlledValue,
};

export const SingleChip: Story = {
  args: {},
  render: (args) => (
    <Chips.Item {...args} value="1">
      <Chips.Item.Icon icon={Plus} />
      <Chips.Item.Text>Chip</Chips.Item.Text>
    </Chips.Item>
  ),
};

export const Scrollable: Story = {
  args: {
    scrollable: true,
  },
  render: (args) => (
    <Chips {...args} width={300}>
      {Array.from({ length: 25 }).map((_, index) => (
        <Chips.Item key={'scrollable' + index} value={'scrollable' + index}>
          <Chips.Item.Icon icon={Plus} />
          <Chips.Item.Text>Chip {index}</Chips.Item.Text>
        </Chips.Item>
      ))}
    </Chips>
  ),
};
export const FlexWrap: Story = {
  args: {},
  render: (args) => (
    <Chips {...args} flexWrap="wrap">
      {Array.from({ length: 20 }).map((_, index) => (
        <Chips.Item key={'wrap' + index} value={'wrap' + index}>
          <Chips.Item.Icon icon={Plus} />
          <Chips.Item.Text>Chip {index}</Chips.Item.Text>
        </Chips.Item>
      ))}
    </Chips>
  ),
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
  render: ChipsComposition,
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
