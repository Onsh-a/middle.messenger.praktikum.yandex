import Block from '../../utils/Block';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import template from './signin.hbs';

interface signInProps {
  buttons: object | null;
  inputs: object | null;
}

interface buttonProps {
  text: string,
  type: string,
  href: string | null,
  buttonClass: string ,
  componentName: string
  buttonLikeLink: boolean
}

interface inputProps {
  name: string,
  key: string,
  type: string,
  common: boolean,
  componentName: string,
}

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
