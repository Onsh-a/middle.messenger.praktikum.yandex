import Block from '../../utils/Block';
import { navigationLinkProps } from '../../utils/types';
import template from './navLink.hbs';

export default class NavigationLink extends Block {
  constructor(props: navigationLinkProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
