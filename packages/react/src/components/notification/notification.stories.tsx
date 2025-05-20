import { Stack } from '@tamagui/core';
import { Cross } from '@xsolla-zk/icons';
import { Button } from '../button';
import { RichIcon } from '../rich-icon';
import { Typography } from '../typography';
import { Notification } from './notification';
import { NotificationProvider } from './provider/notification-provider';
import { NotificationViewport, useNotificationController, useNotificationState } from '.';
import type { NotificationProps } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Notification,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    children: { table: { disable: true } },
  },
  args: {},
  play: async ({ canvasElement }) => {},
} as Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

function NotificationBase(props: NotificationProps) {
  const currentNotification = useNotificationState();

  return (
    <Notification
      key={currentNotification?.id}
      animation="medium"
      enterStyle={{ opacity: 0, transform: [{ translateY: 100 }] }}
      exitStyle={{ opacity: 0, transform: [{ translateY: 100 }] }}
      transform={[{ translateY: 0 }]}
      opacity={1}
      scale={1}
      viewportName={currentNotification?.viewportName}
      {...props}
    >
      <Notification.Title>Notification Title</Notification.Title>
      <Notification.Description>Notification Description</Notification.Description>
      <Notification.Action altText="Notification Action 1">
        <Typography>Action</Typography>
      </Notification.Action>
      <Notification.Close>
        <RichIcon>
          <RichIcon.Icon icon={Cross} />
        </RichIcon>
      </Notification.Close>
    </Notification>
  );
}

function NotificationShowHide() {
  const toast = useNotificationController();

  return (
    <Stack flexDirection="row" justifyContent="center" gap={12}>
      <Button
        onPress={() => {
          toast.show('Success!', {
            message: 'Some description message',
          });
        }}
      >
        <Button.Text>Show</Button.Text>
      </Button>
      <Button
        onPress={() => {
          toast.hide();
        }}
      >
        <Button.Text>Hide</Button.Text>
      </Button>
    </Stack>
  );
}

function NotificationComposition(args: NotificationProps) {
  return (
    <Stack gap="$200">
      <NotificationShowHide />
      <NotificationBase {...args} />
    </Stack>
  );
}

export const Default: Story = {
  args: {},
  render: (args) => (
    <NotificationProvider>
      <NotificationViewport />
      <NotificationViewport name="viewport-custom" />
      <NotificationComposition {...args} />
    </NotificationProvider>
  ),
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
