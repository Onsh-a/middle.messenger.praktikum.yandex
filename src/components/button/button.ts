import Block from '../../utils/Block';
import template from './button.hbs';

interface ButtonProps {
  text: string,
  type: string,
  href: string | null,
  buttonClass: string ,
  componentName: string
  buttonLikeLink: boolean
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
