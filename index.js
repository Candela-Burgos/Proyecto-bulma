// VARIABLES GLOBALES

const burgerIcon = document.querySelector('#burger');
const navBarMenu = document.querySelector('#nav-links');

// EVENTOS

const activarNavBarMenu = () => {
    navBarMenu.classList.toggle('is-active')//toggle= cuando se aprieta, se agrega y cuando se aprieta nuevamente se saca, y asi susesivamente.
}

burgerIcon.addEventListener('click', activarNavBarMenu)

// MODAL    

// VARIABLES GLOBALES
const btnRegister = document.querySelector('#btn-register');
const modalRegister = document.querySelector('.modal');
const modalBg = document.querySelector('.modal-background');

// EVENTOS

const abrirModal = () => {
    modalRegister.classList.add('is-active')
}

btnRegister.addEventListener('click', abrirModal);

const cerrarModal = () => {
    modalRegister.classList.remove('is-active')
}

modalBg.addEventListener('click', cerrarModal);