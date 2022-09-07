class Input {
  initInputs(): void {
    const inputWrapper: NodeListOf<HTMLElement> = document.querySelectorAll('.base-input__wrapper');

    inputWrapper.forEach((element) => {
      const input: HTMLInputElement | null = element.querySelector('input');
      if (input && input.value) {
        element.classList.add('active');
      }
      this.bindEvents(element);
    });
  }

  handleFocus(e: Event): void {
    const {target} = e;
    if (target && target instanceof HTMLElement && target.parentNode) {
      (<HTMLElement>target.parentNode).classList.add('active');
    }
  }

  handleBlur(e: Event): void {
    const {target} = e;
    if (target && target instanceof HTMLInputElement && target.parentNode && !target.value) {
      (<HTMLElement>target.parentNode).classList.remove('active');
    }
  }

  bindEvents(element: HTMLElement): void {
    const floatField: HTMLInputElement | null = element.querySelector('input');
    if (floatField) {
      floatField.addEventListener('focus', this.handleFocus);
      floatField.addEventListener('blur', this.handleBlur);
    }
  }
}

export default Input;
