class Modal {
  initModal(triggerButtonSelector) {
    const openButton = document.querySelector(triggerButtonSelector);
    const modal = document.querySelector('.base-modal');
    const modalContainer = document.querySelector('.base-modal__container');
    const modalClose = document.querySelector('.base-modal__close');

    if (openButton && modal) {
      modalContainer.addEventListener('click', (e) => {
        e.stopPropagation();
      });

      openButton.addEventListener('click', this.openModal);
      modal.addEventListener('click', this.closeModal);
      modalClose.addEventListener('click', this.closeModal);
    }
  }

  openModal() {
    const modal = document.querySelector('.base-modal');
    modal.classList.add('base-modal--open');
  }

  closeModal() {
    const modal = document.querySelector('.base-modal');
    modal.classList.remove('base-modal--open');
  }
}

export default Modal;
