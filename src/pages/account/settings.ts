import Block from '../../utils/Block';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Modal from '../../components/modal/modal';
import { loginPageProps, buttonProps, inputProps } from '../../utils/types';
import template from './settings.hbs';

export class AccountPage extends Block {
  constructor(props: loginPageProps) {
    super('div', props);
  }

  init() {
    this.props.buttons.forEach((button: buttonProps, index: number) => {
      this.children[button.componentName] = new Button({
        ...this.props.buttons[index],
      });
    });

    this.props.inputs.forEach((input: inputProps, index: number) => {
      this.children[input.componentName] = new Input({
        ...this.props.inputs[index],
      });
    });

    if (this.props.modal) {
      this.children.modal = new Modal({
        ...this.props.modal,
      });
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}
