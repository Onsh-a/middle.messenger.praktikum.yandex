import Block from '../../utils/Block';
import { inputProps } from "../../utils/types";
import template from './input.hbs';

export class Input extends Block {
  constructor(props: inputProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
