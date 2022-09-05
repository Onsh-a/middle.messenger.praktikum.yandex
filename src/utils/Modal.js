"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Modal {
    initModal(triggerButtonSelector) {
        const modal = document.querySelector('.base-modal');
        if (modal) {
            const openButton = document.querySelector(triggerButtonSelector);
            const modalContainer = modal.querySelector('.base-modal__container');
            const modalClose = modal.querySelector('.base-modal__close');
            if (modalContainer && openButton && modalClose) {
                modalContainer.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
                openButton.addEventListener('click', this.openModal);
                modal.addEventListener('click', this.closeModal);
                modalClose.addEventListener('click', this.closeModal);
            }
        }
    }
    openModal() {
        const modal = document.querySelector('.base-modal');
        if (modal)
            modal.classList.add('base-modal--open');
    }
    closeModal() {
        const modal = document.querySelector('.base-modal');
        if (modal)
            modal.classList.remove('base-modal--open');
    }
}
exports.default = Modal;
