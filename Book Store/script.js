// Shadow On Scroll
let header = document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY > 0);
});

// Search Button
const searchButton = document.getElementById("searchButton");
const searchClose = document.getElementById("search-close"),
searchContent = document.getElementById("search-content");

if(searchButton){
    searchButton.addEventListener('click', ()=>{
        searchContent.classList.add('show-search');
    });
}
if(searchClose){
    searchClose.addEventListener('click', ()=>{
        searchContent.classList.remove('show-search');
    });
}
// Hamburger Menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Scroll Reveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
})
sr.reveal('.home-text',{origin:'left'})
sr.reveal('.center-text',{origin:'right'})
sr.reveal('.home-img',{origin:'right'})
sr.reveal('.first i',{origin:'right'})
sr.reveal('.first h5',{origin:'left'})
sr.reveal('.first p',{origin:'left'})
sr.reveal('.about-text',{origin:'left'})
sr.reveal('.about-img',{origin:'top'})
sr.reveal('categories-content .box',{origin:'left',interval: 200})
sr.reveal('.box img',{origin:'top'})
sr.reveal('.box h3',{origin:'bottom'})
sr.reveal('.box p',{origin:'bottom'})
sr.reveal('.container img',{delay:600})