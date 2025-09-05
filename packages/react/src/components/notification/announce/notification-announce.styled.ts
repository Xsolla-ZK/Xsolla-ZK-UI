import { Stack } from '@tamagui/core';
import { NOTIFICATION_ANNOUNCE_EXCLUDE_COMPONENT_NAME } from '@xsolla-zk/constants';
import { smartContextStyled } from '../../../utils';

export const NotificationAnnounceExcludeFrame = smartContextStyled(Stack, {
  name: NOTIFICATION_ANNOUNCE_EXCLUDE_COMPONENT_NAME,
});
