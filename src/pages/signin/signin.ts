import Block from '../../utils/Block';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { signInProps, buttonProps, inputProps, HTMLInputEvent } from '../../utils/types';
import template from './signin.hbs';
import { Validator } from '../../utils/Validation';

const validation = new Validator();

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
        ...this.props.inputs[index],
        events: {
          focusout: (e: HTMLInputEvent) => {
            const hasError = validation.validate(e);
            const props = this.children[input.componentName].props;
            const newProps = { ...props, 'has_error': hasError };
            this.children[input.componentName].setProps(newProps);
          }
        }
      })
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}
