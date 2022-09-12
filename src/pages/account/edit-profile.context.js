const editProfileContext = {
  pageTitle: 'Редактирование профиля',
  name: 'Иван Иванов',
  inputs: [
    {
      settings: true,
      name: 'Почта',
      key: 'email',
      componentName: 'inputEmail',
      validation_rule: 'email',
      type: 'text',
      value: 'test@yandex.ru',
      readonly: false,
    },
    {
      settings: true,
      name: 'Логин',
      key: 'login',
      componentName: 'inputLogin',
      validation_rule: 'login',
      type: 'text',
      value: 'SomeLogin123',
      readonly: false,
    },
    {
      settings: true,
      name: 'Имя',
      key: 'first_name',
      componentName: 'inputName',
      validation_rule: 'name',
      type: 'text',
      value: 'Иван',
      readonly: false,
    },
    {
      settings: true,
      name: 'Фамилия',
      key: 'last_name',
      componentName: 'inputLastname',
      validation_rule: 'name',
      type: 'text',
      value: 'Иванов',
      readonly: false,
    },
    {
      settings: true,
      name: 'Имя в чате',
      key: 'chat-name',
      componentName: 'inputChatName',
      validation_rule: 'name',
      type: 'text',
      value: 'Иван',
      readonly: false,
    },
    {
      settings: true,
      name: 'Телефон',
      key: 'phone',
      componentName: 'inputPhone',
      validation_rule: 'phone',
      type: 'text',
      value: '+79999999999',
      readonly: false,
    },
  ],
  buttons: [
    {
      text: 'Сохранить',
      buttonClass: 'common',
      componentName: 'buttonSave',
      type: 'submit',
      form: 'settings-form'
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
export default editProfileContext;
