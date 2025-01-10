import XZKUIAccordion from './accordion';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUIAccordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {},
  args: {
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUIAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const contentBlank =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis imperdiet nibh. In nunc eros, fermentum at massa id, egestas pulvinar lorem. Morbi nisi orci, feugiat in gravida et, efficitur ac metus. Nam euismod, magna eget cursus pretium, risus metus rutrum diam, nec hendrerit risus elit nec risus. Vivamus sed lorem mollis, malesuada tellus quis, condimentum nulla. Mauris ornare leo eget volutpat consectetur. Duis sed mattis nisi. Vivamus id mi tincidunt, consequat enim et, ultrices magna. Mauris porttitor ornare porta. Maecenas maximus dignissim ipsum, sodales ultricies felis auctor sed. Aliquam convallis efficitur quam, quis faucibus justo rutrum scelerisque.';

export const Default: Story = {
  args: {
    list: Array.from({ length: 3 }, (_, idx) => ({
      header: `Header #${idx + 1}`,
      content: contentBlank,
    })),
  },
};

export const Standalone: Story = {
  args: {
    header: 'Standalone Header',
    children: contentBlank,
  },
};

export const MultipleStandalones: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {},
  render: () => (
    <>
      <XZKUIAccordion header="Standalone Header 1">{contentBlank}</XZKUIAccordion>
      <XZKUIAccordion header="Standalone Header 2">{contentBlank}</XZKUIAccordion>
    </>
  ),
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
