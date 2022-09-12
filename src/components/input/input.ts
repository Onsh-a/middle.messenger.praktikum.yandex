import Block from '../../utils/Block';
import { inputProps } from '../../utils/types';
import template from './input.hbs';
import Validator from "../../utils/Validation";

export default class Input extends Block {
  constructor(props: inputProps) {
    super('div', props);
  }

  validator = new Validator();

  toggleError = (hasError:boolean, errorMessage:string) => {
    if (!this._element) return;
    if (hasError) {
      this._element.classList.add('error');
      const errorBlock = this._element.querySelector('.base-input-error') as HTMLElement;
      if (errorBlock) errorBlock.innerText = errorMessage;
      return;
    }
    this._element.classList.remove('error');
  };

  render() {
    return this.compile(template, this.props);
  }
}
