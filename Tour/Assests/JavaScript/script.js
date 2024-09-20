// Hamburger menu
const menuBtn = document.getElementById("menu-icon");
const navLinks = document.getElementById("navBar");
const menuBtnIcon = document.querySelector("#menu-icon i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-5-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("active");
    menuBtnIcon.setAttribute("class", "ri-menu-5-line");
});


// Add shadow
let header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    let triggerHeight = window.innerHeight * 0.1;
    header.classList.toggle('shadow', window.scrollY > triggerHeight);
});