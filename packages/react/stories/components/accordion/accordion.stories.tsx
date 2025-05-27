import { Stack } from '@tamagui/core';
import { ChevronDown } from '@xsolla-zk/icons';
import { RichIcon } from '../rich-icon';
import { Typography } from '../typography';
import { Accordion } from './accordion';
import type { AccordionProps } from './accordion.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Accordion,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['stable'],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const contentBlank =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis imperdiet nibh. In nunc eros, fermentum at massa id, egestas pulvinar lorem. Morbi nisi orci, feugiat in gravida et, efficitur ac metus. Nam euismod, magna eget cursus pretium, risus metus rutrum diam, nec hendrerit risus elit nec risus. Vivamus sed lorem mollis, malesuada tellus quis, condimentum nulla. Mauris ornare leo eget volutpat consectetur. Duis sed mattis nisi. Vivamus id mi tincidunt, consequat enim et, ultrices magna. Mauris porttitor ornare porta. Maecenas maximus dignissim ipsum, sodales ultricies felis auctor sed. Aliquam convallis efficitur quam, quis faucibus justo rutrum scelerisque.';

const list = Array.from({ length: 3 }, (_, idx) => ({
  header: `Header #${idx + 1}`,
  value: `item-${idx + 1}`,
  content: contentBlank,
}));

function AccordionComponent(props: AccordionProps) {
  return (
    <Stack padding={40}>
      <Accordion gap="$200" {...props}>
        {list.map((item) => (
          <Accordion.Item key={item.header} value={item.value} backgroundColor="$overlay.neutral">
            <Accordion.Header asChild>
              <Accordion.Trigger>
                {({ open }) => (
                  <>
                    <Typography preset="compact.300.default">{item.header}</Typography>
                    <RichIcon
                      size="$200"
                      animation="bounceReturn"
                      rotate={open ? '180deg' : '0deg'}
                    >
                      <RichIcon.Icon icon={ChevronDown} />
                    </RichIcon>
                  </>
                )}
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.HeightAnimator animation="bounceReturn">
              <Accordion.Content animation="bounceReturn" exitStyle={{ opacity: 0 }}>
                <Typography>{item.content}</Typography>
              </Accordion.Content>
            </Accordion.HeightAnimator>
          </Accordion.Item>
        ))}
      </Accordion>
    </Stack>
  );
}

export const Default: Story = {
  args: {
    type: 'single',
  },
  render: (args) => <AccordionComponent {...args} />,
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => <AccordionComponent {...args} />,
};

export const CollapsibleAll: Story = {
  args: {
    type: 'single',
    toggleable: true,
  },
  render: (args) => <AccordionComponent {...args} />,
};

export const ExpandedByDefault: Story = {
  args: {
    type: 'single',
    defaultValue: 'item-2',
  },
  render: (args) => <AccordionComponent {...args} />,
};

export const StandaloneCustomBg: Story = {
  args: {
    type: 'single',
    toggleable: true,
  },
  render: (args) => <AccordionComponent {...args} gap="unset" backgroundColor="$absinthe.700" />,
};

// export const StandaloneCustomHeaderButton: Story = {
//   args: {
//     header: 'Standalone Custom Header Button',
//     children: contentBlank,
//     renders: {
//       headerButton: ({ active }) => (
//         <XZKUIRichIcon component="button" size={200}>
//           <XZKUISvgIcon icon={active ? SvgCash : SvgBankCard} />
//         </XZKUIRichIcon>
//       ),
//     },
//   },
// };

export const StandaloneHeaderTriggerIconOnly: Story = {
  args: {
    type: 'single',
    toggleable: true,
  },
  render: (args) => (
    <Stack padding={40}>
      <Accordion {...args} gap="$200">
        <Accordion.Item value="1" backgroundColor="$overlay.neutral">
          <Accordion.Header>
            <Typography preset="compact.300.default">Header</Typography>
            <Accordion.Trigger>
              {({ open }) => (
                <RichIcon size="$200" animation="bounceReturn" rotate={open ? '180deg' : '0deg'}>
                  <RichIcon.Icon icon={ChevronDown} />
                </RichIcon>
              )}
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.HeightAnimator animation="bounceReturn">
            <Accordion.Content animation="bounceReturn" exitStyle={{ opacity: 0 }}>
              <Typography>{contentBlank}</Typography>
            </Accordion.Content>
          </Accordion.HeightAnimator>
        </Accordion.Item>
      </Accordion>
    </Stack>
  ),
};

// export const MultipleStandalones: Story = {
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   args: {},
//   render: () => (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//       <XZKUIAccordion header="Standalone Header 1">{contentBlank}</XZKUIAccordion>
//       <XZKUIAccordion header="Standalone Header 2">{contentBlank}</XZKUIAccordion>
//     </div>
//   ),
// };

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
