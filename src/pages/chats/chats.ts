import Block from '../../utils/Block';
import { chatsPageProps } from "../../utils/types";
import template from './chats.hbs';

export class Chats extends Block {
  constructor(props: chatsPageProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
