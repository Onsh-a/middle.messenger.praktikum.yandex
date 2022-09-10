import Block from '../../utils/Block';
import Button from '../button/button';
import template from './modal.hbs';
import { modalButtonProps, modalProps } from '../../utils/types';

export default class Modal extends Block {
  constructor(props: modalProps) {
    super('div', props);
  }

  init() {
    this.props.buttons.forEach((button: modalButtonProps, index: number) => {
      this.children[button.componentName] = new Button({
        ...this.props.buttons[index],
      });
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
