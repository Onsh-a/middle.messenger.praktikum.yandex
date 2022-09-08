const signinContext = {
  pageTitle: 'Регистрация',
  inputs: [
    {
      name: 'почта',
      key: 'email',
      type: 'text',
      componentName: 'inputEmail',
      common: true,
    },
    {
      name: 'логин',
      key: 'login',
      type: 'text',
      componentName: 'inputLogin',
      common: true,
    },
    {
      name: 'имя',
      key: 'first_name',
      type: 'text',
      componentName: 'inputName',
      common: true,
    },
    {
      name: 'фамилия',
      key: 'second_name',
      type: 'text',
      componentName: 'inputSurname',
      common: true,
    },
    {
      name: 'телефон',
      key: 'phone',
      type: 'text',
      componentName: 'inputPhone',
      common: true,
    },
    {
      name: 'пароль',
      key: 'password',
      type: 'password',
      componentName: 'inputPassword',
      common: true,
    },
    {
      name: 'подтвердите пароль',
      key: 'repeat_password',
      type: 'password',
      componentName: 'inputRepeatPassword',
      common: true,
    },
  ],
  buttons: [
    {
      text: 'Зарегистрироваться',
      type: 'submit',
      href: null,
      buttonClass: 'common',
      componentName: 'buttonSignin',
      buttonLikeLink: false,
    },
    {
      text: 'Войти',
      type: 'button-like-link',
      href: '/login',
      buttonClass: 'button-like-link',
      componentName: 'buttonLogin',
      buttonLikeLink: true,
    },
  ],
};
export default signinContext;
