class Input {
  initInputs() {
    const inputWrapper = document.querySelectorAll('.base-input__wrapper');

    inputWrapper.forEach((element) => {
      if (element.querySelector('input').value) element.classList.add('active');
      this.bindEvents(element);
    });
  }

  handleFocus(e) {
    const { target } = e;
    target.parentNode.classList.add('active');
  }

  handleBlur(e) {
    const { target } = e;
    if (!target.value) {
      target.parentNode.classList.remove('active');
    }
  }

  bindEvents(element) {
    const floatField = element.querySelector('input');
    floatField.addEventListener('focus', this.handleFocus);
    floatField.addEventListener('blur', this.handleBlur);
  }
}

export default Input;
