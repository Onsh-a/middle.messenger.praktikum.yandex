const changePasswordContext = {
  pageTitle: 'Изменение пароля',
  inputs: [
    {
      settings: true,
      name: 'Старый пароль',
      key: 'old_pwd',
      componentName: 'inputOldPwd',
      validation_rule: 'password',
      type: 'text',
      value: '•••••••••',
    },
    {
      settings: true,
      name: 'Новый пароль',
      key: 'new_pwd',
      componentName: 'inputNewPwd',
      validation_rule: 'password',
      type: 'text',
      value: '••••••••••••',
    },
    {
      settings: true,
      name: 'Повторите новый пароль',
      key: 'repeat_new_pwd',
      componentName: 'inputRepeatNewPwd',
      validation_rule: 'password',
      type: 'text',
      value: '••••••••••••',
    },
  ],
  buttons: [
    {
      text: 'Сохранить',
      componentName: 'buttonSave',
      buttonClass: 'common',
      form: 'settings-form',
    },
  ],
  events: {
    submit: function(evt) {
      evt.preventDefault();
      const errors = [];
      const childrenKeys = Object.keys(this.children);
      childrenKeys.forEach(key => {
        const child = this.children[key];
        if (child.hasOwnProperty('validator')) {
          const input = child._element.querySelector('input');
          const { hasError, errorMessage } = child.validator.validate(null, input);
          if (hasError) errors.push(hasError);
          child.toggleError(hasError, errorMessage);
        }
      })

      if (errors.length > 0) {
        console.log('Форма заполнена с ошибками');
        return
      }
      const formData = new FormData(this._form);
      console.log(...formData);
    }
  }
};
export default changePasswordContext;
