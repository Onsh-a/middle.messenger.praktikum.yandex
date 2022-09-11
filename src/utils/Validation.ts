import { HTMLInputEvent } from './types';

export default class Validator {
  readonly _validationRules: Record<string, any> = {
    name: {
      checkRegExp: /^(?!\s\W)[A-ZА-Я][A-Za-zА-Яа-я-]+$/,
      errorMessage: 'Может содержать только буквы и знак -',
    },
    login: {
      required: true,
      min: 3,
      max: 20,
      checkRegExp: /^(?=\D)(?!\s)[a-z\d_-]+$/i,
      errorMessage: 'Может содержать только буквы, цифры и знаки -_',
    },
    email: {
      checkRegExp:
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
      errorMessage: 'Поле email заполнено неверно',
    },
    password: {
      required: true,
      min: 8,
      max: 40,
      checkRegExp: /^(?=.*[A-Z])(?=.*\d).*$/,
      errorMessage: 'Должна быть хотя бы одна заглавная буква и цифра',
    },
    phone: {
      min: 10,
      max: 15,
      checkRegExp: /^[+]?\d+$/,
      errorMessage: 'Введите телефон в формате +7 999 999 99 99',
    },
  };

  private _element: HTMLInputElement | null = null;

  validate(event: HTMLInputEvent, specificTarget:HTMLInputElement | null = null) {
    const validationTarget = specificTarget ? specificTarget : event.target;
    if (!validationTarget) throw new Error('Failed to find object of validation');
    this._element = validationTarget;
    const { value } = this._element;
    const validationType = this._element.dataset.validation || 'none';
    const { checkRegExp, errorMessage } = this._validationRules[validationType];
    return { hasError: !checkRegExp.test(value), errorMessage };
  }
}
