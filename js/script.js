 /*=================== MOBILE NAVIGATION BAR =====================*/
// Variables
let menuToggle = document.querySelector('.menuToggler');
let menuList = document.querySelector('.menu-list');
let closeBtn = document.querySelector('.close');


let searchIcon = document.querySelector('.searchIcon');
let inputField = document.querySelector('.inputField');
let searchCloseBtn = document.querySelector('.searchClose');

// ShowMenu
const showMenu = () => {
    menuList.classList.add('show');
}
// CloseMenu
const closeMenu = () => {
    console.log('clicked')
    menuList.classList.remove('show');
}

// ShowSearch
const showSearch = () => {
    inputField.classList.add('show');
}
// CloseSearch
const closeSearch = () => {
    inputField.classList.remove('show');
}

// EventListener
menuToggle.addEventListener('click', showMenu);
closeBtn.addEventListener('click', closeMenu);

searchIcon.addEventListener('click', showSearch);
searchCloseBtn.addEventListener('click', closeSearch);