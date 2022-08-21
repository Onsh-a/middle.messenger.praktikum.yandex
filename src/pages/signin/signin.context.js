const signinContext = {
  inputs: [
    {
      name: 'почта',
      key: 'email',
      type: 'text',
      common: true,
    },
    {
      name: 'логин',
      key: 'login',
      type: 'text',
      common: true,
    },
    {
      name: 'имя',
      key: 'first_name',
      type: 'text',
      common: true,
    },
    {
      name: 'фамилия',
      key: 'second_name',
      type: 'text',
      common: true,
    },
    {
      name: 'телефон',
      key: 'phone',
      type: 'text',
      common: true,
    },
    {
      name: 'пароль',
      key: 'password',
      type: 'password',
      common: true,
    },
    {
      name: 'подтвердите пароль',
      key: 'repeat_password',
      type: 'password',
      common: true,
    },
  ],
  buttons: [
    {
      text: 'Зарегистрироваться',
      type: 'submit',
      href: null,
      buttonClass: 'common',
      buttonLikeLink: false,
    },
    {
      text: 'Войти',
      type: 'button-like-link',
      href: '/login',
      buttonClass: 'button-like-link',
      buttonLikeLink: true,
    },
  ],
};
export default signinContext;
