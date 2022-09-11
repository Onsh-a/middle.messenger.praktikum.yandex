const signinContext = {
  pageTitle: 'Регистрация',
  inputs: [
    {
      name: 'почта',
      key: 'email',
      type: 'text',
      componentName: 'inputEmail',
      common: true,
      validation_rule: 'email',
      has_error: false,
    },
    {
      name: 'логин',
      key: 'login',
      type: 'text',
      componentName: 'inputLogin',
      common: true,
      validation_rule: 'login',
      has_error: false,
    },
    {
      name: 'имя',
      key: 'first_name',
      type: 'text',
      componentName: 'inputName',
      common: true,
      validation_rule: 'name',
      has_error: false,
    },
    {
      name: 'фамилия',
      key: 'second_name',
      type: 'text',
      componentName: 'inputSurname',
      common: true,
      validation_rule: 'name',
      has_error: false,
    },
    {
      name: 'телефон',
      key: 'phone',
      type: 'text',
      componentName: 'inputPhone',
      common: true,
      validation_rule: 'phone',
      has_error: false,
    },
    {
      name: 'пароль',
      key: 'password',
      type: 'password',
      componentName: 'inputPassword',
      common: true,
      validation_rule: 'password',
      has_error: false,
    },
    {
      name: 'подтвердите пароль',
      key: 'repeat_password',
      type: 'password',
      componentName: 'inputRepeatPassword',
      common: true,
      validation_rule: 'password',
      has_error: false,
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
export default signinContext;
