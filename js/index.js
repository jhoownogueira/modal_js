const btnModal =  document.querySelector('.js-open-modal');
const btnCloseModal = document.querySelector('.close');
const modal = document.querySelector('#js-modal');

function openModal() {
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

btnModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);