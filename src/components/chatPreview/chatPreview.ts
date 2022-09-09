import Block from '../../utils/Block';
import { chatPreviewProps } from '../../utils/types';
import template from './chatPreview.hbs';

export class ChatPreview extends Block {
  constructor(props: chatPreviewProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
