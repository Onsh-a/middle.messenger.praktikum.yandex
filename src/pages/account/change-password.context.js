const changePasswordContext = {
  pageTitle: 'Изменение пароля',
  inputs: [
    {
      settings: true,
      name: 'Старый пароль',
      key: 'old_pwd',
      componentName: 'inputOldPwd',
      type: 'text',
      value: '•••••••••',
    },
    {
      settings: true,
      name: 'Новый пароль',
      key: 'new_pwd',
      componentName: 'inputNewPwd',
      type: 'text',
      value: '••••••••••••',
    },
    {
      settings: true,
      name: 'Повторите новый пароль',
      key: 'repeat_new_pwd',
      componentName: 'inputRepeatNewPwd',
      type: 'text',
      value: '••••••••••••',
    },
  ],
  buttons: [
    {
      text: 'Сохранить',
      componentName: 'buttonSave',
      buttonClass: 'common',
    },
  ],
};
export default changePasswordContext;
