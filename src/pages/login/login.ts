import Block from '../../utils/Block';
import { Input } from '../../components/input/input';
import template from './login.hbs';

interface loginPageProps {
  buttons: object | null;
  inputs: object | null;
}

export class Login extends Block {
  constructor(props: loginPageProps) {
    super('div', props);
  }

  init() {
    this.children.inputLogin = new Input({
      ...this.props.inputs[0]
    });
    this.children.inputPassword = new Input({
      ...this.props.inputs[1]
    });
    // this.children.input2 = new Input({
    //   name: 'логин',
    //   key: 'login',
    //   type: 'text',
    //   common: true,
    // });
  }

  render() {
    return this.compile(template, this.props);
  }
}
