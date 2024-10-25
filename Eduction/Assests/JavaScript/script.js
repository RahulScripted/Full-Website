
// Add shadow on nav bar
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("header");
    if (window.scrollY > 50) navbar.classList.add("shadow");
    else navbar.classList.remove("shadow");
});

// Smooth Scrolling
document.querySelectorAll('.navBar li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
      
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger Menu
let menu = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navBar');

menu.onclick = () => {
    menu.classList.toggle('add');
    navBar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('add'); 
    navBar.classList.remove('active');
}

// Scroll Revel Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '120px',
    duration: 2200,
    delay: 200,
    reset: true,
})

// Home 
sr.reveal('.home .curve',{origin:'left'})
sr.reveal('.home img',{origin:'left',delay: 100})
sr.reveal('.home .paragraph',{origin:'left',delay: 200})

// Lessons 
sr.reveal('.lessons .Creativity',{origin:'top'})
sr.reveal('.lessons .curve',{origin:'left',delay: 100})
sr.reveal('.lessons .heading',{origin:'left',delay: 200})
sr.reveal('.lessons .paragraph',{origin:'left',delay: 200})
sr.reveal('.lessons .btn',{origin:'left',delay: 200})

// Beginner 
sr.reveal('.beginner img',{origin:'left',delay:200,interval : 400})
sr.reveal('.beginner .textSec .curve, .beginner .textSec .heading, .beginner .textSec .paragraph,.beginner .textSec .btn',{origin:'right',delay:200,interval : 400})

// Lesson 
sr.reveal('.ideas .curve',{origin:'top'})
sr.reveal('.ideas .heading',{origin:'top',delay : 100})
sr.reveal('.ideas .container .content',{origin:'right',delay : 100,interval : 400})
sr.reveal('.ideas .btn',{origin:'bottom',delay : 200})

// Support
sr.reveal('.support .curve',{origin:'top'})
sr.reveal('.support .heading',{origin:'left',delay : 100})
sr.reveal('.support .paragraph',{origin:'right',delay : 200})
sr.reveal('.support .btn',{origin:'bottom',delay : 200})