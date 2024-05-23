const buttonMenu = document.querySelector('.button__menu');
const menuMobile = document.querySelector('.menuMobile')
let isMenuOpen = false; 


buttonMenu.addEventListener('click', function() {
    isMenuOpen ? menuMobile.classList.add('invisible') : menuMobile.classList.remove('invisible');

    isMenuOpen ? buttonMenu.children[0].setAttribute('src', '../assets/icons/menu.svg') : buttonMenu.children[0].setAttribute('src', '../assets/icons/close.svg')
    

    isMenuOpen = !isMenuOpen
    console.log(isMenuOpen)
})