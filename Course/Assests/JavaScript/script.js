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

// Add event listener to each menu link to close the menu on click
let menuLinks = document.querySelectorAll(".navBar a")
menuLinks.forEach(link => {
    link.onclick = () => {
        navBar.classList.remove('active');
        menuIconImage.classList.replace('ri-close-line', 'ri-menu-line');
    };
});


// Update Button text
const buttonText = document.getElementById("view");
function updateButtonText(){
    if(window.innerWidth < 500){
        buttonText.textContent = 'View All';
    }
    else{
        buttonText.textContent = 'View All Courses';
    }
}
updateButtonText();
window.addEventListener('resize',updateButtonText);


// Swiper JS
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,  
});