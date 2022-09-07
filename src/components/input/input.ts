import Block from '../../utils/Block';
import template from './input.hbs';

interface InputProps {
  name: string,
  key: string,
  type: string,
  common: boolean,
}

export class Input extends Block {
  constructor(props: InputProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
