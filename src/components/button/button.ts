import Block from '../../utils/Block';
import { buttonProps } from '../../utils/types';
import template from './button.hbs';

export default class Button extends Block {
  constructor(props: buttonProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
