import Block from '../../utils/Block';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Validator from '../../utils/Validation';
import {
  loginPageProps, buttonProps, inputProps, HTMLInputEvent,
} from '../../utils/types';
import template from './login.hbs';

export default class Login extends Block {
  constructor(props: loginPageProps) {
    super('div', props);
  }

  _form: HTMLFormElement | null = null
  validation: Validator = new Validator();

  init() {
    this.props.buttons.forEach((button: buttonProps, index: number) => {
      this.children[button.componentName] = new Button({
        ...this.props.buttons[index],
      });
    });

    this.props.inputs.forEach((input: inputProps, index: number) => {
      this.children[input.componentName] = new Input({
        ...this.props.inputs[index],
        events: {
          focusout: (e: HTMLInputEvent) => {
            const { hasError, errorMessage } = this.validation.validate(e);
            // если есть идея, как правильно сказать ts, что в this.children[input.componentName]
            // лежит инстанс класса input, буду благодарен
            // @ts-ignore
            this.children[input.componentName].toggleError(hasError, errorMessage);
          },
        },
      });
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
