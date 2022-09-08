import Block from '../../utils/Block';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { signInProps, buttonProps, inputProps } from '../../utils/types';
import template from './signin.hbs';

export class SignIn extends Block {
  constructor(props: signInProps) {
    super('div', props);
  }

  init() {
    this.props.buttons.forEach((button: buttonProps, index: number) => {
      this.children[button.componentName] = new Button({
        ...this.props.buttons[index]
      })
    })

    this.props.inputs.forEach((input: inputProps, index: number) => {
      this.children[input.componentName] = new Input({
        ...this.props.inputs[index]
      })
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}