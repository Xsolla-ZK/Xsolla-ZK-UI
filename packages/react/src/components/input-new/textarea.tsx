/* eslint-disable @typescript-eslint/ban-ts-comment */
import { styled } from '@tamagui/core';
import { InputNew } from './input-new';
import { INPUT_NEW_COMPONENT_NAME } from './input-new.constants';

export const TextArea = styled(InputNew, {
  name: INPUT_NEW_COMPONENT_NAME,
  tag: 'textarea',

  // this attribute fixes firefox newline issue
  // @ts-ignore
  whiteSpace: 'pre-wrap',
  height: 'auto',
});
