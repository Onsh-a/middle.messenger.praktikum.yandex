const settingsContext = {
  pageTitle: 'Настройки',
  name: 'Иван Иванов',
  inputs: [
    {
      settings: true,
      name: 'Почта',
      key: 'email',
      componentName: 'inputEmail',
      type: 'text',
      value: 'test@yandex.ru',
      readonly: true,
    },
    {
      settings: true,
      name: 'Логин',
      key: 'login',
      componentName: 'inputLogin',
      type: 'text',
      value: 'SomeLogin123',
      readonly: true,
    },
    {
      settings: true,
      name: 'Имя',
      key: 'name',
      componentName: 'inputName',
      type: 'text',
      value: 'Иван',
      readonly: true,
    },
    {
      settings: true,
      name: 'Фамилия',
      key: 'lastname',
      componentName: 'inputLastname',
      type: 'text',
      value: 'Иванов',
      readonly: true,
    },
    {
      settings: true,
      name: 'Имя в чате',
      key: 'chat-name',
      componentName: 'inputChatName',
      type: 'text',
      value: 'Иван',
      readonly: true,
    },
    {
      settings: true,
      name: 'Телефон',
      key: 'phone',
      componentName: 'inputPhone',
      type: 'text',
      value: '+7 (999) 999 99 99',
      readonly: true,
    },
  ],
  modal: {
    buttons: [
      {
        text: 'Отменить',
        buttonClass: 'common danger',
        componentName: 'buttonCancel',
      },
      {
        text: 'Сохранить',
        buttonClass: 'common disable',
        componentName: 'buttonSave',
      },
    ]
  },
  buttons: [
    {
      text: 'Редактировать',
      buttonClass: 'common',
      componentName: 'buttonEdit',
    },
    {
      text: 'Изменить пароль',
      buttonClass: 'common',
      componentName: 'buttonChangePassword',
    },
    {
      text: 'Выйти из аккаунта',
      buttonClass: 'common danger',
      componentName: 'buttonLeaveAccount',
    },
  ],
};
export default settingsContext;
