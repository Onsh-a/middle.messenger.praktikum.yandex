const settingsContext = {
  name: 'Иван Иванов',
  inputs: [
    {
      settings: true,
      name: 'Почта',
      key: 'email',
      type: 'text',
      value: 'test@yandex.ru',
      readonly: true,
    },
    {
      settings: true,
      name: 'Логин',
      key: 'login',
      type: 'text',
      value: 'SomeLogin123',
      readonly: true,
    },
    {
      settings: true,
      name: 'Имя',
      key: 'name',
      type: 'text',
      value: 'Иван',
      readonly: true,
    },
    {
      settings: true,
      name: 'Фамилия',
      key: 'lastname',
      type: 'text',
      value: 'Иванов',
      readonly: true,
    },
    {
      settings: true,
      name: 'Имя в чате',
      key: 'chat-name',
      type: 'text',
      value: 'Иван',
      readonly: true,
    },
    {
      settings: true,
      name: 'Телефон',
      key: 'phone',
      type: 'text',
      value: '+7 (999) 999 99 99',
      readonly: true,
    },
  ],
  buttons: [
    {
      text: 'Редактировать',
      buttonClass: 'common',
    },
    {
      text: 'Изменить пароль',
      buttonClass: 'common',
    },
    {
      text: 'Выйти из аккаунта',
      buttonClass: 'common danger',
    },
  ],
};
export default settingsContext;
