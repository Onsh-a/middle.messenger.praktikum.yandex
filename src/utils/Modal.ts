class Modal {
  initModal(triggerButtonSelector:string):void {
    const modal:HTMLElement | null = document.querySelector('.base-modal');

    if (modal) {
      const openButton:HTMLElement | null = document.querySelector(triggerButtonSelector);
      const modalContainer:HTMLElement | null = modal.querySelector('.base-modal__container');
      const modalClose:HTMLElement | null = modal.querySelector('.base-modal__close');

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

  openModal():void {
    const modal = document.querySelector('.base-modal');
    if (modal) modal.classList.add('base-modal--open');
  }

  closeModal():void {
    const modal = document.querySelector('.base-modal');
    if (modal) modal.classList.remove('base-modal--open');
  }
}

export default Modal;
