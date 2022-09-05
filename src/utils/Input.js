"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Input {
    initInputs() {
        const inputWrapper = document.querySelectorAll('.base-input__wrapper');
        inputWrapper.forEach((element) => {
            const input = element.querySelector('input');
            if (input && input.value) {
                element.classList.add('active');
            }
            this.bindEvents(element);
        });
    }
    handleFocus(e) {
        const { target } = e;
        if (target && target instanceof HTMLElement && target.parentNode) {
            target.parentNode.classList.add('active');
        }
    }
    handleBlur(e) {
        const { target } = e;
        if (target && target instanceof HTMLInputElement && target.parentNode && !target.value) {
            target.parentNode.classList.remove('active');
        }
    }
    bindEvents(element) {
        const floatField = element.querySelector('input');
        if (floatField) {
            floatField.addEventListener('focus', this.handleFocus);
            floatField.addEventListener('blur', this.handleBlur);
        }
    }
}
exports.default = Input;
