const loginContext = {
  pageTitle: 'Логин',
  inputs: [
    {
      name: 'логин',
      key: 'login',
      type: 'text',
      componentName: 'inputLogin',
      validation_rule: 'login',
      common: true,
    },
    {
      name: 'пароль',
      key: 'password',
      type: 'text',
      componentName: 'inputPassword',
      validation_rule: 'password',
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
export default loginContext;
