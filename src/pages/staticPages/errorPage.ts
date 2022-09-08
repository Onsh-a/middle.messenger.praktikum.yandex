import Block from '../../utils/Block';
import { errorPageProps } from '../../utils/types';
import template from './errorPage.hbs';

export class ErrorPage extends Block {
  constructor(props: errorPageProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
