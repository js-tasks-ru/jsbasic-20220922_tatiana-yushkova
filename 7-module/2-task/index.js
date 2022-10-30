export default class Modal {
  constructor() {
    this.modal = document.createElement('div');
    this.modal.classList.add('modal');
    this.modal.insertAdjacentHTML('afterbegin', this.createModal());

    this.closeOnX();
    this.closeEsc();
  }

  open() {
    document.body.insertAdjacentElement('afterbegin', this.modal);
    document.body.classList.add('is-modal-open');
  }

  createModal() {
    return `
    <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
        </h3>
      </div>
      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>`
  }

  setTitle(modalTitle) {
    const modalTitleElem = this.modal.querySelector('.modal__title');
    modalTitleElem.textContent = modalTitle;
  }

  setBody(node) {
    let modalBody = this.modal.querySelector('.modal__body');
    modalBody.textContent = '';
    modalBody.insertAdjacentElement('afterbegin', node);
  }

  close() {
    this.modal.remove();
    document.body.classList.remove('is-modal-open');
  }

  closeOnX() {
    let close = this.modal.querySelector('.modal__close');
    close.addEventListener('click', () => {
      this.modal.remove();
      document.body.classList.remove('is-modal-open');
    });
  }

  closeEsc() {
    document.addEventListener('keydown', (e) => {
      if(e.code === 'Escape') {
        this.modal.remove();
        document.body.classList.remove('is-modal-open');
      }
    });
  }
}
