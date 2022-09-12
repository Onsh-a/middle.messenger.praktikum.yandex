import Block from '../../utils/Block';
import { buttonProps, chatPreviewProps, chatsPageProps } from '../../utils/types';
import Button from '../../components/button/button';
import ChatPreview from '../../components/chatPreview/chatPreview';
import template from './chats.hbs';

export default class Chats extends Block {
  constructor(props: chatsPageProps) {
    super('div', props);
  }

  init() {
    this.props.chatPreviews.forEach((chatPreview: chatPreviewProps, index: number) => {
      this.children[chatPreview.componentName] = new ChatPreview({
        ...this.props.chatPreviews[index],
      });
    });

    this.props.buttons.forEach((button: buttonProps, index: number) => {
      this.children[button.componentName] = new Button({
        ...this.props.buttons[index],
      });
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
