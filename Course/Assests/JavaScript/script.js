// Hamburger Menu
let menu = document.querySelector('#menuIcon');
let menuIconImage = document.querySelector('#menuIcon i');
let navBar = document.querySelector('.navBar');

menu.onclick = () => {
    navBar.classList.toggle('active');
    if (navBar.classList.contains('active')) {
        menuIconImage.classList.replace('ri-menu-line', 'ri-close-line');
    } 
    else {
        menuIconImage.classList.replace('ri-close-line', 'ri-menu-line'); 
    }
}