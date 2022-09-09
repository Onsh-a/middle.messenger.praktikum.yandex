import Block from '../../utils/Block';
import { buttonProps, chatsPageProps } from '../../utils/types';
import template from './chats.hbs';
import { Button } from '../../components/button/button';
import { ChatPreview } from '../../components/chatPreview/chatPreview';

export class Chats extends Block {
  constructor(props: chatsPageProps) {
    super('div', props);
  }

  init() {
    this.props.chatPreviews.forEach((chatPreview: any, index: number) => {
      this.children[chatPreview.componentName] = new ChatPreview({
        ...this.props.chatPreviews[index],
      });
    });

    this.props.buttons.forEach((button: any, index: number) => {
      this.children[button.componentName] = new Button({
        ...this.props.buttons[index],
      });
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
