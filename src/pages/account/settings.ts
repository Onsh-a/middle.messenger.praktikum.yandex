import Block from '../../utils/Block';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Modal from '../../components/modal/modal';
import Validator from "../../utils/Validation";
import {loginPageProps, buttonProps, inputProps, HTMLInputEvent} from '../../utils/types';
import template from './settings.hbs';

export default class AccountPage extends Block {
  constructor(props: loginPageProps) {
    super('div', props);
  }

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
