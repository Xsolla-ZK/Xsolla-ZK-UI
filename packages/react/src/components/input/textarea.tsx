import { styled } from '@tamagui/web';
import Input from './input';

const TextArea = styled(Input, {
  name: 'TextArea',
  tag: 'textarea',

  height: 'auto',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  whiteSpace: 'pre-wrap',
});

export default TextArea;
