const loginContext = {
  inputs: [
    {
      name: 'логин',
      key: 'login',
      type: 'text',
      componentName: 'inputLogin',
      common: true,
    },
    {
      name: 'пароль',
      key: 'password',
      type: 'text',
      componentName: 'inputPassword',
      common: true,
    }],
  buttons: [
    {
      text: 'Войти',
      type: 'submit',
      href: null,
      buttonClass: 'common',
      componentName: 'buttonEnter',
      buttonLikeLink: false,
    },
    {
      text: 'Нет аккаунта',
      type: 'button-like-link',
      href: '/signin',
      buttonClass: 'button-like-link',
      componentName: 'buttonNoAccount',
      buttonLikeLink: true,
    },
  ],
};
export default loginContext;
