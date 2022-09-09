import { HTMLInputEvent } from './types';

export class Validator {
  readonly _validationRules: Record<string, any> = {
    name: {
      match: /^(?!\s\W)[A-ZА-Я][A-Za-zА-Яа-я-]+$/,
      desc: 'Должен содержать только буквы и знак -',
    },
    login: {
      required: true,
      min: 3,
      max: 20,
      match: /^(?=\D)(?!\s)[a-z\d_-]+$/i,
      desc: 'Должен содержать только буквы, цифры и знаки -_',
    },
    email: {
      match:
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
    },
    password: {
      required: true,
      min: 8,
      max: 40,
      match: /^(?=.*[A-Z])(?=.*\d).*$/,
      desc: 'Должна быть хотя бы одна заглавная буква и цифра',
    },
    phone: {
      min: 10,
      max: 15,
      match: /^[+]?\d+$/,
      desc: 'Может начинаться с плюса и содержит только цифры',
    },
  };
  private _element: HTMLInputElement | null = null;
  private _errorBlock: HTMLElement | null = null;

  validate(event: HTMLInputEvent) {
    if (!event.target && !Validator._findErrorBlock(event.target)) throw new Error('Failed to find object of validation');
    this._element = event.target;
    this._errorBlock = Validator._findErrorBlock(this._element);
    const value = this._element.value;
    const validationType = this._element.dataset.validation || 'none';
    const checkRegExp:RegExp = this._validationRules[validationType].match;
    const hasError = !checkRegExp.test(value);
    return hasError;
    // hasError ? this._fireError() : this._checkSuccess();
  }

  // private _fireError() {
  //   console.log('failed');
  // }
  //
  // private _checkSuccess() {
  //   console.log('success');
  // }

  private static _findErrorBlock(target: HTMLElement): HTMLElement | null {
    const parent = target.parentNode;
    return parent ? parent.querySelector('.base-input__error') : null;
  }
}
