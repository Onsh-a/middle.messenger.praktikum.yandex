import Block from '../../utils/Block';
import { NavigationLink } from '../../components/navigationLink/navLink';
import { navigationProps, navigationLinkProps } from '../../utils/types';
import template from './navigation.hbs';

export class Navigation extends Block {
  constructor(props: navigationProps) {
    super('div', props);
  }

  init() {
    this.props.links.forEach((link: navigationLinkProps, index: number) => {
      this.children[link.componentName] = new NavigationLink({
        ...this.props.links[index],
      });
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
