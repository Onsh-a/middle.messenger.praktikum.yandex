import Block from '../../utils/Block';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import {
  signInProps, buttonProps, inputProps, HTMLInputEvent,
} from '../../utils/types';
import template from './signin.hbs';
import Validator from '../../utils/Validation';

export default class SignIn extends Block {
  constructor(props: signInProps) {
    super('div', props);
    this._form = this._element ? this._element.querySelector('form.auth-form') : null
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
            // лежит инстанс класса Input, буду благодарен
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
